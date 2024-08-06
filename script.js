const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const birthdate = document.getElementById('birthdate').value;
  if (birthdate === '2003-12-27') {
    result.innerHTML = `
      <p>wow, you know the password, you're a hacker, right? Haha, hmm are you happy now? Or not?</p>
      <button id="yes">Yes</button>
      <button id="no">No</button>
    `;
    const yesButton = document.getElementById('yes');
    const noButton = document.getElementById('no');

    yesButton.addEventListener('click', () => {
        result.innerHTML = `
          <p>I'm glad to hear that! Always be happy and take care of yourself okay? thank you for opening this hehe ^_^</p>
          <button id="yes-again">Yes</button>
          <button id="no-again">No</button>
        `;
        const yesAgainButton = document.getElementById('yes-again');
        const noAgainButton = document.getElementById('no-again');
      
        yesAgainButton.addEventListener('click', () => {
          result.innerHTML = `
            <p>I know you're a smart little child, take care of yourself, thank you a little cat ^_^</p>
          `;
        });
      
        noAgainButton.addEventListener('click', () => {
          result.innerHTML = `
            <p>Ha, are you drunk or something? You said you're "happy" but chose "no", so are you "happy" or not?</p>
            <button id="yes-happy">Yes</button>
            <button id="no-happy">No</button>
          `;
          const yesHappyButton = document.getElementById('yes-happy');
          const noHappyButton = document.getElementById('no-happy');
      
          yesHappyButton.addEventListener('click', () => {
            result.innerHTML = `
              <p>Huh, You're a weird little child, but keep smiling because your smile is sweeter than a kitten's mwehehe -_^</p>
            `;
          });
      
          noHappyButton.addEventListener('click', () => {
            // Redirect to the original "noButton" section
            result.innerHTML = `
              <p>Why? Do you have any problems now? Do you want to talk to me?</p>
              <button id="yes-talk">Yes</button>
              <button id="no-talk">No</button>
            `;
            const yesTalkButton = document.getElementById('yes-talk');
            const noTalkButton = document.getElementById('no-talk');
      
            yesTalkButton.addEventListener('click', () => {
              result.innerHTML = `
                <p>Alright, then chat me, I'm sure you know what I mean, I'm waiting for you see yaa later:>:>:>:>:></p>
              `;
            });
      
            noTalkButton.addEventListener('click', () => {
              result.innerHTML = `
                <p>Hmm, are you sure? I'm a problem expert hahaha, tell me what's wrong?</p>
                <button id="yes-really">Yes</button>
                <button id="no-really">No</button>
              `;
              const yesReallyButton = document.getElementById('yes-really');
              const noReallyButton = document.getElementById('no-really');
      
              yesReallyButton.addEventListener('click', () => {
                result.innerHTML = `
                  <p>Alright, then chat me, I'm sure you know what I mean, I'm waiting for you see yaa:>:>:>:>:></p>
                `;
              });
      
              noReallyButton.addEventListener('click', () => {
                result.innerHTML = `
                  <p>Huh, you're so stubborn, haha, okay, you can think about it again later when you want to talk, hmph see yaa!😤</p>
                `;
              });
            });
          });
        });
      });

    noButton.addEventListener('click', () => {
      result.innerHTML = `
        <p>Why? Do you have any problems now? Do you want to talk to me?</p>
        <button id="yes-talk">Yes</button>
        <button id="no-talk">No</button>
      `;
      const yesTalkButton = document.getElementById('yes-talk');
      const noTalkButton = document.getElementById('no-talk');

      yesTalkButton.addEventListener('click', () => {
        result.innerHTML = `
          <p>Alright, then chat me, i'm sure you know what I mean, I'm waiting for you :>:>:>:>:></p>
        `;
      });

      noTalkButton.addEventListener('click', () => {
        result.innerHTML = `
          <p>Hmm, are you sure? I'm a problem expert hahaha, tell me what's wrong?</p>
          <button id="yes-really">Yes</button>
          <button id="no-really">No</button>
        `;
        const yesReallyButton = document.getElementById('yes-really');
        const noReallyButton = document.getElementById('no-really');

        yesReallyButton.addEventListener('click', () => {
          result.innerHTML = `
            <p>Alright, then message me, i'm sure you know what I mean, I'm waiting for you :>:>:>:>:></p>
          `;
        });

        noReallyButton.addEventListener('click', () => {
          result.innerHTML = `
            <p>Huh, you're so stubborn, haha, okay, you can think about it again later when you want to talk, hmph😤</p>
          `;
        });
      });
    });
  } else if (birthdate === '2022-08-25') {
    result.innerHTML = `
      <p>Wow, you found the secret password, how did you know that? Ah, but I think I know who you are ^_^.</p>
    `;
  } else {
    result.innerHTML = `
      <p>Sorry, that's not the correct birthdate.</p>
    `;
  }
});