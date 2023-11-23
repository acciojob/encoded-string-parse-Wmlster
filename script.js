const parseCode = (s) => {
  // your code here

	let obj={};

	let n=s.length;

	let j=0;
	let name="";
	
	for(let i=0;i<n;i++)
		{
			if(s[i]=='0')
			{
				j=i;
				break;
			}

			name+=s[i];
		}

	obj["firstName"]=name;

	for(let i=j;i<n;i++)
		{
			if(s[i]!='0')
			{
				j=i;
				break;
			}
		}

	let lname="";

	for(let i=j;i<n;i++)
		{
			if(s[i]=='0')
			{
				j=i;
				break;
			}

			lname+=s[i];
		}

	obj["lastName"]=lname;

	for(let i=j;i<n;i++)
		{
			if(s[i]!='0')
			{
				j=i;
				break;
			}
		}

	let id="";

	for(let i=j;i<n;i++)   
		{
			id+=s[i];
		}

	obj["id"]=id;

	return obj;
	
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
