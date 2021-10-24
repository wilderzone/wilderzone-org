var player_data;
var data_fetch_enable = 1;
var begin_fetch_time;
function getServerData(){
  if(data_fetch_enable == 1){
    data_fetch_enable = 0;
    begin_fetch_time = Date.now();
    $.ajax({
      dataType:"json",
      url:"dummy_data.json",
      cache:false,
      success:function(data1){
        player_data = data1;
        const end_fetch_time = Date.now();
        console.log('Server data loaded in ', ((end_fetch_time - begin_fetch_time) / 1000) + "s");
        updateDOM();
        data_fetch_enable = 1;
      },
      error:function(xhr, status, err){
        console.log("Error " + xhr.status);
        data_fetch_enable = 1;
      }
    });
  }
}
getServerData();