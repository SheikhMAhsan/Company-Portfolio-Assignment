// Effect for first card 

        // function packagebtn1(){
        //     var package_btn = document.getElementById('packagebtn1');
        //     var card = document.getElementById('packagecard1');
        //     package_btn.style.bottom = '45%';
        //     card.style.filter = 'blur(2px)'
            
        // }
        // function packagebtnout1(){
        //     var package_btn = document.getElementById('packagebtn1');
        //     var card = document.getElementById('packagecard1');
        //     package_btn.style.bottom = '-14px';
        //     card.style.filter = 'blur(0px)'
        // }

        // Effect for second card 

        function packagebtn2(){
            var package_btn = document.getElementById('packagebtn2');
            var card = document.getElementById('packagecard2');
            package_btn.style.bottom = '45%';
            card.style.filter = 'blur(2px)'   
        }
        function packagebtnout2(){
            var package_btn = document.getElementById('packagebtn2');
            var card = document.getElementById('packagecard2');
            package_btn.style.bottom = '-14px';
            card.style.filter = 'blur(0px)'
        }

        // Effect for third card 

        // function packagebtn3(){
        //     var package_btn = document.getElementById('packagebtn3');
        //     var card = document.getElementById('packagecard3');
        //     package_btn.style.bottom = '45%';
        //     card.style.filter = 'blur(2px)' 
        // }
        // function packagebtnout3(){
        //     var package_btn = document.getElementById('packagebtn3');
        //     var card = document.getElementById('packagecard3');
        //     package_btn.style.bottom = '-14px';
        //     card.style.filter = 'blur(0px)'
        // }

        // Functions for Buy buttons

        var packages = [{'name': 'WEB BASIC PREMIUM',
         'price': '$859.00',
          'Pagecount': 'Unlimited Pages Website',
           'turnaround': '5 Business Days' ,
            'Stock Photos': '10' ,
             'webhosting': 'Free One Year Web Hosting',
              'cms': 'Free CMS Integration'},

        {'name': 'WEB BASIC PLUS',
         'price': '$649.00',
          'Pagecount': '7 Pages Website',
           'turnaround': '5 Business Days' ,
            'Stock Photos': '7' ,
             'webhosting': 'W3C Certifies HTML' ,
              'cms': 'Add CMS for $299'},

        {'name': 'WEB BASIC',
         'price': '$499.00',
          'Pagecount': '5 Pages Website',
           'turnaround': '5 Business Days' ,
            'Stock Photos': '4' ,
             'webhosting': 'W3C Certifies HTML' ,
              'cms': 'Add CMS for $299'}]

        function premium(){
            

            if (confirm('Are you sure you want to order ' + packages[0].name + ' package ?')) {
                alert('Package name: ' + packages[0].name  + '\n' + 'Page Count: ' + packages[0].Pagecount + '\n' + 'Turn Around: ' + packages[0].turnaround + '\n' + 'Web Hosting: ' + packages[0].webhosting + '\n' + 'CMS: ' + packages[0].cms  + '\n' + '\n' + 'Price: ' + packages[0].price)
            } else {
                // Do nothing!
            }
        }

        function plus(){
            if (confirm('Are you sure you want to order ' + packages[1].name + ' package ?')) {
                alert('Package name: ' + packages[1].name  + '\n' + 'Page Count: ' + packages[1].Pagecount + '\n' + 'Turn Around: ' + packages[1].turnaround + '\n' + 'Web Hosting: ' + packages[1].webhosting + '\n' + 'CMS: ' + packages[1].cms  + '\n' + '\n' + 'Price: ' + packages[1].price)
            } else {
                // Do nothing!
            }
        }

        function basic(){
            if (confirm('Are you sure you want to order ' + packages[2].name + ' package ?')) {
                alert('Package name: ' + packages[2].name  + '\n' + 'Page Count: ' + packages[2].Pagecount + '\n' + 'Turn Around: ' + packages[2].turnaround + '\n' + 'Web Hosting: ' + packages[2].webhosting + '\n' + 'CMS: ' + packages[2].cms  + '\n' + '\n' + 'Price: ' + packages[2].price)
            } else {
                // Do nothing!
            }
        }