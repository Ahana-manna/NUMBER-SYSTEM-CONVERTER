let option = document.getElementById('unit3');
let number = (document.getElementById('inp'));
let button = document.querySelector('button');
let space = document.querySelectorAll('.space');
let b_no, o_no, d_no, h_no, num;  

function Convert(){
    console.log(number.value)
    if(button.innerText=='Convert'){
        var text = option.options[option.selectedIndex].text
    //binary
        if (text=='Binary') {
            b_no = parseInt(number.value);
            space[0].innerText= b_no;

            //binary to decimal
            d_no=0, c = 0, r=0;
            while ( b_no > 0)  {  
            r = b_no % 10;  
                b_no /=  10;
                b_no= parseInt(b_no)
                d_no += r * Math.pow(2, c);  
                c++;  
            }
            space[2].innerText = d_no

            //decimal to octal
            num= parseInt(d_no) ,o_no=0, c = 0, r=0;
            while( num > 0) {
                r = num % 8;
                num /= 8;
                num= parseInt(num)
                o_no += r * Math.pow(10, c);
                c++;
            }
            space[1].innerText = o_no

            //decimal to hex
            num= parseInt(d_no) , c=0, r=0 , h_no=""; 
            while(num>0) { 
                r= num % 16;
                num = num /16;
                num= parseInt(num)
                if( r> 9 && r< 16){
                    if( r==10){
                        r = 'A';
                    }
                    else if( r==11){
                        r='B';
                    }
                    else if( r==12){
                        r='C';
                    }
                    else if( r==13){
                        r='D';
                    }
                    else if( r==14){
                        r='E';
                    }
                    else{
                        r='F';
                    }
                }
                h_no+= String(r)
            } 
            h_no= h_no.split("").reverse().join(""); 
            space[3].innerText = h_no 
        }

    //octal
        else if (text =='Octal') {
            o_no= parseInt(number.value);
            space[1].innerText = o_no

            //octal to decimal
            c=0, r=0, d_no=0;
            while(o_no > 0) {
                r= o_no%10;
                o_no/=10;
                o_no=parseInt(o_no);
                d_no += r  * Math.pow(8, c);
                c++;
            }
            space[2].innerText = d_no
            num= parseInt(d_no)

            //decimal to binary
            b_no=0, c = 0, r=0;
            while ( d_no > 0)  {  
            r = d_no % 2;  
                d_no /=  2;
                d_no= parseInt(d_no)
                b_no += r * Math.pow(10, c);  
                c++;  
            }
            space[0].innerText = b_no

            //decimal to hex
            c=0, r=0 , h_no=""; 
            while(num>0) { 
                r= num % 16;
                num = num /16;
                num= parseInt(num)
                if( r> 9 && r< 16){
                    if( r==10){
                        r = 'A';
                    }
                    else if( r==11){
                        r='B';
                    }
                    else if( r==12){
                        r='C';
                    }
                    else if( r==13){
                        r='D';
                    }
                    else if( r==14){
                        r='E';
                    }
                    else{
                        r='F';
                    }
                }
                h_no+= String(r)
            } 
            h_no= h_no.split("").reverse().join(""); 
            space[3].innerText = h_no
        }

    //decimal
        else if(text=='Decimal') {
            d_no= parseInt(number.value);
            space[2].innerText = d_no

            //decimal to binary
            b_no=0, c = 0, r=0;
            while ( d_no > 0)  {  
            r = d_no % 2;  
                d_no /=  2;
                d_no= parseInt(d_no)
                b_no += r * Math.pow(10, c);  
                c++;  
            }
            space[0].innerText = b_no
            
            //decimal to octal
            num= parseInt(number.value) ,o_no=0, c = 0, r=0;
            while( num > 0) {
                r = num % 8;
                num /= 8;
                num= parseInt(num)
                o_no += r * Math.pow(10, c);
                c++;
            }
            space[1].innerText = o_no

            //decimal to hex
            num= parseInt(number.value) , c=0, r=0, h_no=0; 
            while(num>0) { 
                r= num % 16;
                num = num /16;
                num= parseInt(num);
                if( r> 9 && r< 16){
                    if( r==10){
                        r = 'A';
                    }
                    else if( r==11){
                        r='B';
                    }
                    else if( r==12){
                        r='C';
                    }
                    else if( r==13){
                        r='D';
                    }
                    else if( r==14){
                        r='E';
                    }
                    else{
                        r='F';
                    }
                    if(c==0){
                        h_no=r;
                        c++;
                    }
                    else{
                        h_no+=r;
                        c++;
                    }
                }
                else{
                    h_no += r * Math.pow(10, c);
                    c++;
                }
               
            }   
            space[3].innerText = h_no 
        }

    //hexa-decimal
        else {
            h_no= String(number.value);
            space[3].innerText = h_no

            //hex to decimal
            let hex = Array.from(String (h_no));
            let d_no= 0, r= 0, i = 0, length;
            length = hex.length;
            length--;
            for(i=length; i>=0; i--)
            {
                h=String(hex[i]);
                if(h>= '0' && h<= '9')
                {
                    num= parseInt(h)
                    d_no += Math.pow(16,r)*num;
                    r++;
                }
                else
                {
                    if(h=='a' || h=='A'){
                        n=10;
                    }
                    else if(h=='b' || h=='B'){
                        n=11;
                    }
                    else if(h=='c' || h=='C'){
                        n=12;
                    }
                    else if(h=='d' || h=='D'){
                        n=13;
                    }
                    else if(h=='e' || h=='E'){
                        n=14;
                    }
                    else{
                        n=15;
                    }
                    d_no += Math.pow(16,r) * n;
                    r++;
                }
            }
            space[2].innerText = d_no 


            num= parseInt(d_no) 
           //decimal to binary
           b_no=0, c = 0, r=0;
           while ( d_no > 0)  {  
           r = d_no % 2;  
               d_no /=  2;
               d_no= parseInt(d_no)
               b_no += r * Math.pow(10, c);  
               c++;  
           }
           space[0].innerText = b_no
           
           //decimal to octal
           o_no=0, c = 0, r=0;
           while( num > 0) {
               r = num % 8;
               num /= 8;
               num= parseInt(num)
               o_no += r * Math.pow(10, c);
               c++;
           }
           space[1].innerText = o_no

        }       
    }
}

function Reset(){
    document.getElementById('frm').reset();
}