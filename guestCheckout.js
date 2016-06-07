var GOC={}
	GOC.openFrame=function(){
		alert(1)
	}

 var modalWindow='<div id="guestCheckoutMOdal" class="modal fade modal-lg" tabindex="-1" role="dialog">'+
  '<div class="modal-dialog modal-lg">'+
    '<div class="modal-content">'+
      '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
        // '<h4 class="modal-title">Modal title</h4>'+
      '</div>'+
      '<div class="modal-body">'+
        '<iframe id="guestChekoutFrame" src=""></iframe>'+
      '</div>'+
      // '<div class="modal-footer">'+
      //   '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
      //   '<button type="button" class="btn btn-primary">Save changes</button>'+
      // '</div>'+
    '</div>'+
  '</div>'+
'</div> ';
function openFrame(){

	if($("#guestChekoutFrame").length==0){
		$("body").append(modalWindow);
		$("#guestCheckoutMOdal").css({
			"position":"fixed",
			"width":"100%",
			"min-height":"80%",
			"padding":"0px",
			"display":"block",
			"clear":"both",
			"text-align":"center"
			
		});
		//removving the default style of modal
		$("#guestCheckoutMOdal .modal-header").css({
			"min-height": "default",
		    "padding": "5px",
		    "border": "none"
		});
		$("#guestCheckoutMOdal .modal-lg").css({
			"width": "90%"
		})
		$("#guestCheckoutMOdal #guestChekoutFrame").css({
			"border":"0px",
		    "width":"100%"
		});
		
		
	}
	$("#guestChekoutFrame").attr("src","http://localhost:8888");
	$("#guestChekoutFrame").load(function(){
		//iframe load callback
	})

	$("#guestCheckoutMOdal .modal-content").css("height",(screen.height-200)+"px");
	$("#guestChekoutFrame").css("height",(screen.height-260)+"px");
	
	$("#guestCheckoutMOdal").modal("show");
}