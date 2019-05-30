let btn=document.querySelector('.btn');
    vr=document.querySelector('.road_vertical');
    gr=document.querySelector('.road_gorizontal');
    vertLeft=document.querySelector('.vert_svet_left');
    vertRight=document.querySelector('.vert_svet_right');
    gorLeft=document.querySelector('.gorizont_svet_left');
    gorRight=document.querySelector('.gorizont_svet_right');

   

    btn.addEventListener('click',function(){
        if(this.classList.contains('active')){
            vr.style.background = "#00ff00";
            gr.style.background='#df0024';
            this.classList.remove('active');
            vertLeft.querySelector('.svet_green').style.background = "#00ff00";
            vertRight.querySelector('.svet_green').style.background = "#00ff00";
            vertLeft.querySelector('.svet_red').style.background = "transparent";
            vertRight.querySelector('.svet_red').style.background = "transparent";
            gorLeft.querySelector('.svet_red').style.background='#df0024';
            gorRight.querySelector('.svet_red').style.background='#df0024';
            gorLeft.querySelector('.svet_green').style.background='transparent';
            gorRight.querySelector('.svet_green').style.background='transparent';
            
        }else{
            vr.style.background='#df0024';
            gr.style.background='#00ff00';//zel
            this.classList.add('active');
            vertLeft.querySelector('.svet_green').style.background = "transparent";
            vertRight.querySelector('.svet_green').style.background = "transparent";
            vertLeft.querySelector('.svet_red').style.background = "#df0024";
            vertRight.querySelector('.svet_red').style.background = "#df0024";
            gorLeft.querySelector('.svet_red').style.background='transparent';
            gorRight.querySelector('.svet_red').style.background='transparent';
            gorLeft.querySelector('.svet_green').style.background='#00ff00';
            gorRight.querySelector('.svet_green').style.background='#00ff00';
        }
    
    });    