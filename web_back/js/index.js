 $(function (w) {
     function personData() {
         $.ajax({
             type: 'get',
             url: 'http://localhost:8000/admin/getuser',
             success: function (backData) {
                 // console.log(backData);
                 parent.$('.user_info>img').attr('src', backData.data.user_pic);
                 parent.$('.user_info>span').html('欢迎&nbsp;&nbsp;' + backData.data.nickname);
                 parent.$('.user_center_link img').attr('src', backData.data.user_pic);
             }
         })
     }
     w.personData = personData;
 }(window))