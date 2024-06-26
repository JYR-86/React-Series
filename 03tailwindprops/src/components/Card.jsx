function Card({someObj,uname,newArr,btnText="allowMe"}){

  // console.log(props)
  console.log(someObj);
  console.log(uname);
  console.log(newArr);
    return(
        <>
        <div className="relative h-[400px] w-[420px] rounded-md">
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        {/* <h1 className="font-semibold text-white">{props.someObj.username}</h1> */}
        <h1 className="font-semibold text-white">{uname}</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
        </p>
        <button className="mt-2 cursor-pointer items-center text-sm font-semibold text-white">
          {btnText} &rarr;
        </button>
      </div>
    </div>
        </>
    )
}

export default Card