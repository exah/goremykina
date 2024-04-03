import anime from 'animejs'
import React, { useState } from 'react'
import { Box, List, Link } from 'pss-components'
import { Transition } from 'react-transition-group'
import { Flipper, Flipped } from 'react-flip-toolkit'
import { Modal, Notification } from '../components'
import { useIntl } from '../hooks'

const source = {
  en: {
    notification: `"Windows of Heaven. Korean Dramas" from March 28 to June 23 at the Korean Cultural Center`,
    notificationShort: `"Windows of Heaven. Korean Dramas" 03/28-06/23`,
    title: `Special Exhibition: "Windows of Heaven. Korean Dramas"`,
    dates: `March 28 – June 23`,
    location: `Korean Cultural Center`
  },
  ru: {
    notification: `«Окна небес. Корейские сериалы» с 28 марта – 23 июня в Корейском Культурном центре`,
    notificationShort: `«Окна небес. Корейские сериалы» 28.03-23.06`,
    title: `Специальная выставка: «Окна небес. Корейские сериалы»`,
    dates: `28 марта – 23 июня`,
    location: `Корейский Культурный центр`
  }
}

function handleFlipComplete(element) {
  element.style = ''
}

function ExhibitionPage({ duration = 300, easing = 'easeInOutSine' }) {
  const intl = useIntl()
  const [isHidden, setHidden] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const messages = source[intl.lang]

  if (messages == null) {
    return null
  }

  return (
    <Transition
      in={!isHidden}
      onEnter={(targets) =>
        anime({ targets, duration, opacity: [0, 1], easing })
      }
      onExit={(targets) =>
        anime({ targets, duration, opacity: [1, 0], easing })
      }
      timeout={duration}
      unmountOnExit
    >
      <Flipper flipKey={isOpen ? 'open' : 'hidden'}>
        {!isOpen ? (
          <Flipped
            flipId='notification'
            transformOrigin='top center'
            onComplete={handleFlipComplete}
            translate
            opacity
          >
            <Notification
              onOpen={() => setOpen(true)}
              onClose={() => setHidden(true)}
            >
              <Box hide='sm'>✨ {messages.notification}</Box>
              <Box hide='md'>✨ {messages.notificationShort}</Box>
            </Notification>
          </Flipped>
        ) : (
          <Flipped
            flipId='notification'
            transformOrigin='top center'
            onComplete={handleFlipComplete}
          >
            <Modal width={600} onClose={() => setOpen(false)}>
              <Flipped
                inverseFlipId='notification'
                transformOrigin='top center'
                scale
              >
                <Box>
                  <Modal.Content>
                    <List>
                      <List.Item pb={1}>{messages.title}</List.Item>
                      <List.Item py={1}>📆 {messages.dates}</List.Item>
                      <List.Item pt={1}>
                        <Link
                          href='https://russia.korean-culture.org/ru/1046/board/792/read/129063'
                          target='_blank'
                        >
                          🇰🇷 <u>{messages.location}</u>
                        </Link>
                      </List.Item>
                    </List>
                  </Modal.Content>
                  <Box position='relative' ratio={1}>
                    <Box
                      as='video'
                      position='absolute'
                      width='100%'
                      height='100%'
                      ratio={1}
                      src='/videos/korean-center.mp4'
                      inline
                      loop
                      autoPlay
                    />
                  </Box>
                </Box>
              </Flipped>
            </Modal>
          </Flipped>
        )}
      </Flipper>
    </Transition>
  )
}

export default ExhibitionPage
