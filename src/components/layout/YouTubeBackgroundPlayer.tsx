
'use client';

import React, { useEffect } from 'react';

export default function YouTubeBackgroundPlayer() {
  useEffect(() => {
    const videoId = 'KmOVNVZEP9o';
    let player: any; // Instância do YT.Player

    const onPlayerReady = (event: any) => {
      event.target.mute(); // Inicia mudo para tentar contornar restrições de autoplay
      event.target.playVideo();
      // Você pode tentar desmutar após uma interação do usuário ou um pequeno delay
      // setTimeout(() => event.target.unMute(), 1000); 
    };

    const onPlayerStateChange = (event: any) => {
      // @ts-ignore
      if (event.data === window.YT.PlayerState.ENDED) {
        player.playVideo(); // Garante o loop
      }
    };

    const loadYouTubeAPI = () => {
      // @ts-ignore
      if (window.YT && window.YT.Player) {
        createPlayer();
      } else {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        if (firstScriptTag && firstScriptTag.parentNode) {
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        } else {
          document.head.appendChild(tag);
        }

        // @ts-ignore
        window.onYouTubeIframeAPIReady = () => {
          createPlayer();
        };
      }
    };

    const createPlayer = () => {
      // @ts-ignore
      if (!window.YT || !window.YT.Player) {
        setTimeout(createPlayer, 100);
        return;
      }
      // @ts-ignore
      player = new window.YT.Player('youtube-player-container-for-music', {
        videoId: videoId,
        width: 1, 
        height: 1,
        playerVars: {
          autoplay: 1,
          controls: 0,
          loop: 1,
          playlist: videoId,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          rel: 0,
          origin: typeof window !== 'undefined' ? window.location.origin : '',
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange,
        }
      });
    };

    if (typeof window !== 'undefined') {
      if (!document.getElementById('youtube-player-container-for-music')) {
        const playerDiv = document.createElement('div');
        playerDiv.id = 'youtube-player-container-for-music';
        playerDiv.style.position = 'fixed';
        playerDiv.style.zIndex = '-1';
        playerDiv.style.top = '0';
        playerDiv.style.left = '0';
        playerDiv.style.width = '1px';
        playerDiv.style.height = '1px';
        playerDiv.style.opacity = '0';
        playerDiv.style.pointerEvents = 'none';
        document.body.appendChild(playerDiv);
      }
      loadYouTubeAPI();
    }

    return () => {
      // @ts-ignore
      if (player && typeof player.destroy === 'function') {
        player.destroy();
      }
      // @ts-ignore
      delete window.onYouTubeIframeAPIReady;
      // Não removemos o div aqui para evitar problemas de HMR, 
      // mas em produção ele seria limpo com a página
    };
  }, []);

  return null; // Este componente não renderiza nada visualmente
}
