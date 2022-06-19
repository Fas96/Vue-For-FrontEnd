v-bind directive

I used to set the value of an html attribute. It is used instead of the interpolation that is used to output text in opening
and closing html tags. When interpolation is used to set html attribute value then the value is kept with the {{}} used in defining interpolations.

```html
<p>{{courseGoal}}</p>
<p>Learn more about our <a v-bind:href="orgLink">organization</a> </p>
```
