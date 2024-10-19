<script lang="ts">
    import { onMount } from 'svelte';
    import stytchClient from '../../../lib/server/models/stytch/stytchClient';
  
    let magicToken = '';
  
    onMount(async () => {
      const urlParams = new URLSearchParams(window.location.search);
      magicToken = urlParams.get('token') || '';
      
      if (magicToken) {
        try {
          const response = await stytchClient.magicLinks.authenticate({
          token: magicToken,
          session_duration_minutes: 60, // Optional, defines session length
          });        
          console.log("User authenticated:", response);
          // Handle successful authentication (e.g., redirect or show logged-in state)
        } catch (error) {
          console.error("Magic link authentication failed:", error);
        }
      }
    });
  </script>
  
  <div>
    <h1>Authenticating...</h1>
  </div>