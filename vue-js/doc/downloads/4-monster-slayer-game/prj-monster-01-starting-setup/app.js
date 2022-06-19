const app =Vue.createApp({

    data(){
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            gameLogs: []

        }
    },
    watch:{
        playerHealth(currentValue){
            if(currentValue<=0 && this.monsterHealth<=0){
                this.winner='draw'
               this.playerHealth=0
                //draw
            }else if(currentValue<0){
                //player lost
                this.winner='monster'
                this.playerHealth=100
                this.monsterHealth=100
                this.gameLogs=[]
                this.currentRound=0
            }
        },
        monsterHealth(currentValue){
            if(currentValue<0 && this.playerHealth<=0){
                this.monsterHealth=0
                //draw
                this.winner='draw'
            }else if(currentValue<=0){
                this.playerHealth=100
                this.monsterHealth=100
                this.currentRound=0
                this.gameLogs=[]
                //monster lost
                this.winner='player'
            }
        }

    },
    computed:{
        monsterBarStyle(){
            return {width: this.monsterHealth + '%'}
        },
        playerBarStyle(){
            return {width: this.playerHealth + '%'}
        },
        mayUseSpecialAttach(){
            return this.currentRound%3 !== 0 ;
        },
        healPlayerNow(){
            return this.currentRound%5 !== 0 ;
        }

    }
    ,
    methods:{
        attackMonster(){
            const attackValue=getRandom(12,5)
            this.monsterHealth-= attackValue
            this.gamelogsFunc('player','attack',attackValue)
            this.attackPlayer()
            this.currentRound+=1

        },
        attackPlayer(){
            const attackValue=getRandom(12,5)
            this.playerHealth-= attackValue
            this.gamelogsFunc('monster','attack',attackValue)

        },
        specialAttackMonster(){
            const  attachVal=getRandom(25,10)
            this.monsterHealth-=attachVal
            this.gamelogsFunc('player','special-attack',attachVal)

            this.attackPlayer()
            this.currentRound+=1

        },
        healPlayer(){
            const healVal=getRandom(8,3)
            this.playerHealth += healVal;
            this.currentRound+=1
            this.gamelogsFunc('player','heal',healVal)

            this.attackPlayer()
        },
        gamelogsFunc(who,what,value){
            this.gameLogs.unshift({
                actionBy: who,
                activeType: what,
                actionValue: value
            })
        }


    }
})


function getRandom(max,min) {
    return Math.floor(Math.random()*(max-min)+min)
}
app.mount("#game")