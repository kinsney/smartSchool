<style lang="sass" scoped>

@mixin Gradient($direct,$C1,$C2)
{
    background-image: -ms-linear-gradient($direct,$C1,$C2);          /* IE 10 */
    background-image:-moz-linear-gradient($direct,$C1,$C2);          /*火狐*/

    background:-webkit-gradient(linear, 0% 0%,100% 0%,from($C1),to($C2));      /* webkit核心:解决方案*/
    background-image: -webkit-linear-gradient($direct,$C1,$C2);      /*Safari5.1 Chrome 10+*/

    background-image: -o-linear-gradient($direct,$C1,$C2);           /*Opera 11.10+*/
    background-image: linear-gradient($direct,$C1,$C2);
}

.v-costManage
{
    color:white;
    &>h4 {font-size:16px;margin:10px 0;}
    .showBox
    {
        width:100%;margin:20px 0;padding:20px;box-sizing:border-box;border-radius:5px;
        background-color:rgba(255,255,255,0.2);
        overflow:hidden;zoom:1;   /*清除浮动*/
        >div { float:left;box-sizing:border-box;text-align:center; }

        %titleData{ padding:5px 0; span{font-size:14px;display:block;} h2{font-size:30px;margin:10px 0 0;} }
        >.left{ width:33.33%;border-right:1px solid white;@extend %titleData;}

        >.progress
        { 
            width:66.66%; position:relative;
            .upBar
            {
                position:relative;height:30px;
                %cursor{ span{display:block;} position:absolute;}
                .current{@extend %cursor; left:20%;}
                .target {@extend %cursor; left:70%;}
            }
            .progressBar
            {
                border-radius:20px;width:90%; padding:10px;margin:0 auto;
                overflow:hidden;zoom:1;   /*清除浮动*/

                @include Gradient(left,#32B26C,#ff4081);

                .l{float:left;}
                .r{float:right;}
            }
        }
    }
    .save
    {
        overflow:hidden;zoom:1;   /*清除浮动*/
        margin:20px 0;
        >div
        {
            width:49%;padding:20px;box-sizing:border-box;border-radius:5px;
            background-color:rgba(255,255,255,0.2);
            >p { margin:0 auto 20px 20px; font-size:14px; }
            >div
            {
                text-align:center;
                * { display:inline-block;vertical-align:bottom; }
                div { width:39%; img{height:150px;}}
                span { width:59%; font-size:32px; }
            }
        }
        .trees { float:left; }
        .lights { float:right; }
    }
}
</style>

<template>
	<div class="v-costManage">
		<h4>碳排放</h4>
        <div class="showBox">
            <div class="left">
                <span>碳排放总量</span>
                <h2>322843</h2>
            </div>
            <div class="progress">
                <div class="upBar">
                    <div class="current">
                        <span>当前值</span>
                        <span>▼</span>
                    </div>
                    <div class="target">
                        <span>目标值</span>
                        <span>▼</span>
                    </div>
                </div>
                <div class="progressBar">
                    <span class="l">去年</span>
                    <span class="r">今年</span>
                </div>
            </div>
        </div>
        <div class="save">
            <div class="trees">
                <p>共节约:</p>
                <div>
                    <div><img src="./img/tree.png" /></div>
                    <span>322843 棵</span>
                </div>
            </div>
            <div class="lights">
                <p>共节约:</p>
                <div>
                    <div><img src="./img/light.png" /></div>
                    <span>322843 kwh</span>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
	module.exports =
	{
		
	}
</script>