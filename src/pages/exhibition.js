import anime from 'animejs'
import React, { useState } from 'react'
import { Box, List, Link } from 'pss-components'
import { Transition } from 'react-transition-group'
import { Flipper, Flipped } from 'react-flip-toolkit'
import { Modal, Notification } from '../components'
import { withIntl } from '../hocs'

const source = {
  en: {
    notification: `“Between Sky and Earth” from 15th October — 5th November at Svetlany Sazhinoy's Gallery`,
    notificationShort: `“Between Sky and Earth” 15.10-5.11`,
    title: `Personal exhibition: “Between Sky and Earth”`,
    dates: `15th October - 5th November`,
    location: `Svetlany Sazhinoy's Gallery`
  },
  ru: {
    notification: `«Между небом и землей» с 15 октября — 5 ноября в галереи «Светланы Сажиной»`,
    notificationShort: `«Между небом и землей» 15.10-5.11`,
    title: `Персональная выставка: «Между небом и землей»`,
    dates: `15 октября - 5 ноября`,
    location: `Галерея «Светланы Сажиной»`
  }
}

function handleFlipComplete(element) {
  element.style = ''
}

function Exhibition({ intl, duration = 300, easing = 'easeInOutSine' }) {
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
            onComplete={handleFlipComplete}
            translate
            opacity
          >
            <Notification
              onOpen={() => setOpen(true)}
              onClose={() => setHidden(true)}
            >
              <Box hide='sm'>🥂 {messages.notification}</Box>
              <Box hide='md'>🥂 {messages.notificationShort}</Box>
            </Notification>
          </Flipped>
        ) : (
          <Flipped flipId='notification' onComplete={handleFlipComplete}>
            <Modal width={600} onClose={() => setOpen(false)}>
              <Flipped inverseFlipId='notification' scale>
                <Box>
                  <Modal.Content>
                    <List>
                      <List.Item pb={1}>{messages.title}</List.Item>
                      <List.Item py={1}>📆 {messages.dates}</List.Item>
                      <List.Item pt={1}>
                        <Link href='http://artsazhina.com' target='_blank'>
                          🖼 <u>{messages.location}</u>
                        </Link>
                      </List.Item>
                    </List>
                  </Modal.Content>
                  <Box position='relative' ratio={4 / 3}>
                    <Box
                      as='iframe'
                      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.9334088326436!2d37.605493216186595!3d55.759658980555166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a45ecb922f1%3A0xd07615e92e8e159c!2sGalereya%20Svetlany%20Sazhinoy!5e0!3m2!1sen!2sru!4v1571085539723!5m2!1sen!2sru'
                      position='absolute'
                      width='100%'
                      height='100%'
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

export default withIntl(Exhibition)
