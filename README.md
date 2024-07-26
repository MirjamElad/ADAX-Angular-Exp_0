# ADAX for Angular 

**NB**: [Consult the code and play with the app here: ⚡️](https://stackblitz.com/~/github.com/MirjamElad/ADAX-Angular-Exp_0)

![image](https://github.com/user-attachments/assets/1639cfdc-9808-45de-8737-502efd01f2d1)

The example app allows FANS to vote for either Blue or Red. Notice when voting for either the results panel on top does show the updated score. At the bottom, both "FANS" areas show their respective mood with an emoji. If it's a tie both moods are neutral 😐. Otherwise, the winning team displays 😃 and the losing one 🤬. Click/Vote to see the results pannel update immediately. On the other hand, the "FANS" areas only updates if there is a "change of mood".

![image](https://github.com/user-attachments/assets/e9187244-7396-4d6b-94fa-fc7b2cea9142)


## Code overview:

**State** _(in: "./src/state.ts")_: The app's state/data and the functions to read/query or write/mutate it. This file also contains the app's rules!

**components** _(in: "./src/components/**")_: Contains the two Angular components of our app ("Result Panel" and "Fan's Area")

Unlike other helpers/adapters such as **adax-react** and **adax-vue** that are simple one liners, **adax-angular** requires you to both manually subscribe and unsbscribe to/from the targeted queries!
With **adax-angular**, components subscribtion to queries is done either from within  **ngOnInit** for components _without_ props or from within **ngOnChanges** for components _with_ props. 
Unsubscribing with **adax-angular** is always done within **ngOnDestroy**.

**ResultPanel**, in _"./src/components/**ResultPanel.ts**"_ is a component without props. Whereas **FansGroup.ts** _"./src/components/**FansGroup.ts**"_ is a component with props!

**NB**: [Consult the code and play with the app here: ⚡️](https://stackblitz.com/~/github.com/MirjamElad/ADAX-Angular-Exp_0)
