$('#itcast').fullpage({

    navigation:true,
    sectionsColor:['#f9dd67','#84a2d4','#ef674d','#ffeedd','#cf4759','#85d9ed','#8ac060','#84d9ed'],
    afterLoad:function(a,index){

        if(index == 2){

            //如果是第二屏，才做jQuery动画
            $('.section2 .search01').animate({

                marginLeft:-111

            },1000,'easeOutBack',function(){

                //动画完了把search01隐藏，search02显示
                $('.section2 .search01').hide();
                $('.section2 .search02').show();

                //继续让search02往右上走并且还要缩小
                $('.section2 .search02').delay(600).animate({

                    marginLeft:130,
                    bottom:450,
                    width:148

                },1000);

                $('.section2 .sofas').delay(600).animate({

                    width:441,
                },1000);
            });
        }
    }
});