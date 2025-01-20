	function getQueryVariable(variable)
    {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
                var pair = vars[i].split("=");
                if(pair[0] == variable){return pair[1];}
        }
        return "";
    }

	var ch = getQueryVariable("ch")
	var code = getQueryVariable("code")
	var fbclid = getQueryVariable("fbclid")
	var fbpid = getQueryVariable("fbpid")
	var click_id = getQueryVariable("click_id")
	var pixel_id = getQueryVariable("pixel_id")
	
	

    document.addEventListener('DOMContentLoaded', function() {	
	  var url = "https://login.0ok333.com/fb";
		
      var lan = navigator.language || navigator.userLanguage;
      if (!lan) {
        lan = "";  
      }


      var os = navigator.platform;
      if (!os) {
        os = "";  
      }

	var osVer = ""; 

	try {

	const userAgent = navigator.userAgent.toLowerCase();

	if (userAgent.includes("windows")) {
		const windowsMatch = userAgent.match(/windows\snt\s([\d.]+)/);
		if (windowsMatch) {
		osVer = "Windows " + windowsMatch[1];  
		} else {
		osVer = "Windows Unknown version";
		}
	} else if (userAgent.includes("mac os")) {
		const macMatch = userAgent.match(/mac os x\s([\d_]+)/);
		if (macMatch) {
		osVer = "macOS " + macMatch[1].replace(/_/g, '.');  
		} else {
		osVer = "macOS Unknown version";
		}
	} else if (userAgent.includes("android")) {
		const androidMatch = userAgent.match(/android\s([\d.]+)/);
		if (androidMatch) {
		osVer = "Android " + androidMatch[1];  
		} else {
		osVer = "Android Unknown version";
		}
	} else if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
		const iosMatch = userAgent.match(/os\s([\d_]+)/);
		if (iosMatch) {
		osVer = "iOS " + iosMatch[1].replace(/_/g, '.'); 
		} else {
		osVer = "iOS Unknown version";
		}
	} else {

		osVer = "Unknown System version";
  }
} catch (error) {
  console.error("Can't catch the System version:", error);
}
	  

      var UserAgent = navigator.userAgent;
      if (!UserAgent) {
        UserAgent = ""; 
      }
	  

	console.log("ch:" + ch);
	console.log("code:" + code);
	console.log("fbclid:" + fbclid);
	console.log("fbpid:" + fbpid);
	console.log("click_id:" + click_id);
	console.log("pixel_id:" + pixel_id);
      console.log("lan:" + lan);
      console.log("os:" + os);
      console.log("osVer:" + osVer);
	  console.log("UserAgent:" + UserAgent);

	  
	  var postData = {
        ch: ch,
        code: code,
        fbclid: fbclid,
        fbpid: fbpid,
        click_id: click_id,
        pixel_id: pixel_id,
        lan: lan,
        os: os,
        osVer: osVer,
        UserAgent: UserAgent
      };  

      fetch(url, {
        method: "POST",
        headers: {
           "Content-Type": "text/plain"
		},
        body: JSON.stringify(postData)
      })
      .then(response => response.json())
      .then(data => {

        // console.log(data.key);
		

	
      })
      .catch(error => {

        console.error('Error:', error);
      });


      
	  
    });  
	
    