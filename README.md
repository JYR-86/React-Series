This is the complete project of React

Theory


Q. Why to learn react?
A. to build UI, make easy to manage and build complex frontend

Q. Why react was created?
A. to avoid phantom (ghost) message problem
   ex: in facebook message count is not reduce even after reading that message

Topic to learn
- core of react (state or UI manipulation , JSX (writing HTML within js))
- component resuablity
- reusing of components (props)
- hooks and propagate changes

Additional Addons to react
- Router
- state management (Redux,redux toolkit, zustand, context API)
- class based components (legacy code)
- BAAS (Backend As A Service ) apps (appwrite, firebase)

Cons of react
- No SEO
- late browser rendring of js
- no routing

-------------------------------------------------------------------------------------------------------

{ } --> evulated expression
this take only result . we can't pass expression into this curly brasis
we will pass the variable/prop inside this to render on browser

bebal --> it is the transpiler present in he react which convert js and html into a tree structure and then render on browser

--------------------------------------------------------------------------------------------------------

Virtual DOM
- Js create its own dom for rendring which takes lot of time and make browser slow . so react remove the concept from their implementation.


What is reconciliation?
- The algorithm React uses to diff one tree with another to determine which parts need to be changed.
- Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM."
- re-considering algorithms of component or the changes in UI before final rendring.
- it compares the two tree(BrowserDOM and ReactDOM) and then make final changes.

The key points are:
- In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
- Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
- A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.


Scheduling
- the process of determining when work should be performed.


What is a fiber?
- primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, 
we need to be able to:
 - pause work and come back to it later.
 - assign priority to different types of work.
 - reuse previously completed work.
 - abort work if it's no longer needed.
- In order to do any of this, we first need a way to break work down into units. 
In one sense, that's what a fiber is. 
- A fiber represents a unit of work.
- Later react adopt new algorithm called react fiber .
- fiber slowers and add some algorithms  to take some time to render final changes on UI instead of instance changes.
- it will not update the complete tree it just make small changes into the origial tree by comparing.
- we can set the priority to the changes.