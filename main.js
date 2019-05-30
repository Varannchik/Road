let btn=document.querySelector('.btn');
    btn.addEventListener('click',function(){             
        vr=document.querySelector('.road_vertical');
        gr=document.querySelector('.road_gorizontal');
        vert=document.querySelectorAll('.vert_svet');        
        gor=document.querySelectorAll('.gorizont_svet');
        if(this.classList.contains('active')){
            vr.style.background = "#00ff00";
            gr.style.background='#df0024';
            this.classList.remove('active');
            for(let i=0; i<=vert.length; i++){
                vert[i].querySelector('.svet_green').style.background = "#00ff00";
                gor[i].querySelector('.svet_red').style.background = "#df0024";
                vert[i].querySelector('.svet_red').style.background = "transparent";
                gor[i].querySelector('.svet_green').style.background = "transparent";
            } 
        }else{
            vr.style.background='#df0024';
            gr.style.background='#00ff00';//zel
            this.classList.add('active');
            for(let i=0; i<=vert.length; i++){
                vert[i].querySelector('.svet_red').style.background = "#df0024";
                gor[i].querySelector('.svet_green').style.background = "#00ff00";
                vert[i].querySelector('.svet_green').style.background = "transparent";
                gor[i].querySelector('.svet_red').style.background = "transparent";
            } 
        } 
    });    