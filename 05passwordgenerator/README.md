Hooks
----------

1. useState 
    syntax: const [state, setState] = useState(initialState)
    - useState is a React Hook that lets you add a state variable to your component.
    - useState returns an array with exactly two values:
        - The current state. During the first render, it will match the initialState you have passed.
        - The set function that lets you update the state to a different value and trigger a re-render.
    - ex: const [length,setLength] = useState(8);

2. useCallback
    syntax: const cachedFn = useCallback(fn, dependencies)
    - useCallback is a React Hook that lets you cache a function definition between re-renders.
    - You need to pass two things to useCallback:
        - A function definition that you want to cache between re-renders.
        - A list of dependencies including every value within your component that’s used inside your  function.
    - In this hook we talk about optimization and dependency are dependent on state.
    - ex: const passwordGenerator = useCallback(()=>{
            let pass = ""
            let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
            setPassword(pass) 
          },[length,numberAllow,charAllow])

3. useEffect
    syntax: useEffect(setup, dependencies?)
    - useEffect is a React Hook that lets you synchronize a component with an external system.
    - You need to pass two arguments to useEffect:
        - A setup function with setup code that connects to that system.
        - It should return a cleanup function with cleanup code that disconnects from that system.
        - A list of dependencies including every value from your component used inside of those functions.
    - In this any change happend in dependency will re-render the given function.
    - ex: useEffect(()=>{
            passwordGenerator()
          },[length,numberAllow,charAllow,passwordGenerator])

4. useRef
    syntax: const ref = useRef(initialValue)
    - useRef is a React Hook that lets you reference a value that’s not needed for rendering.
    - it uses to shw user that somting happend while some operation perform.
    - ex: const passRef = useRef(null)
          const copyToClipboard = useCallback(()=>{
            passRef.current?.select();
            window.navigator.clipboard.writeText(password);
          },[password])