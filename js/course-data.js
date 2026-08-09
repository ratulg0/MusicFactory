/**
 * THE MUSIC FACTORY — Course Data
 * Single source of truth for the five programs. Rendered as expanding
 * cards by courses.js on the Home and Programs pages.
 */

export const COURSES = [
  {
    id: 'foundation',
    level: 'Program 01 · Beginners',
    title: 'Foundation',
    icon: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    tagline: 'Built for absolute beginners — rhythm, melody, listening and the first steps of your musical journey.',
    description: 'The Foundation program is designed for absolute beginners who are starting their musical journey for the first time. It builds strong fundamentals in rhythm, melody, listening, practice habits, and basic performance skills. The course is suitable for children, teenagers, and adults with little or no prior musical training.',
    objectives: [
      'Develop a steady sense of beat and rhythm.',
      'Understand the basic language of music.',
      'Learn simple scales, chords, and melodies.',
      'Build daily practice habits.',
      'Gain confidence through beginner-level songs and activities.'
    ],
    chapters: [
      { name: 'Chapter 1 · Music Begins Here', points: ['What is music?', 'Beat, rhythm, melody, and harmony', 'Listening activities', 'Instrument introduction', 'Posture and practice habits'] },
      { name: 'Chapter 2 · Finding the Pulse', points: ['Tempo and metronome', 'Clapping patterns', 'Body rhythm activities', 'Breath and finger coordination', 'Counting aloud'] },
      { name: 'Chapter 3 · My First Melody', points: ['Musical alphabet', 'Major scale', 'Simple notation', 'Melody singing and playing', 'Phrasing and dynamics'] },
      { name: 'Chapter 4 · Songs Start Here', points: ['Major and minor chords', 'Chord changes', 'Basic accompaniment', 'Simple progressions', 'First complete songs'] },
      { name: 'Chapter 5 · Ear Training Fun', points: ['High and low sounds', 'Loud and soft sounds', 'Same and different sounds', 'Echo singing and rhythm imitation', 'Listening games'] }
    ]
  },
  {
    id: 'intermediate',
    level: 'Program 02 · Developing Musicians',
    title: 'Intermediate',
    icon: '<path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.2 19.1 19.1"/>',
    tagline: 'For students with basic skills — musicianship, expression, rhythm control, ensemble awareness and stage confidence.',
    description:
      'The Intermediate program is for students who have completed Foundation or already possess basic musical skills. The course develops musicianship, expression, rhythm control, ensemble awareness, and stage confidence.',
    objectives: [
      'Improve musical expression and phrasing.',
      'Strengthen rhythm and accompaniment skills.',
      'Learn to perform with other musicians.',
      'Develop listening awareness while playing or singing.',
      'Build confidence for public performance.'
    ],
    chapters: [
      { name: 'Chapter 1 · Rhythm in Real Music', points: ['Groove and pulse', 'Strumming patterns', 'Accompaniment rhythms', 'Tempo control', 'Rhythm exercises'] },
      { name: 'Chapter 2 · Singing Through the Instrument', points: ['Phrasing', 'Tone production', 'Articulation', 'Dynamics', 'Emotional delivery'] },
      { name: 'Chapter 3 · Playing Together', points: ['Ensemble listening', 'Balance and blending', 'Cueing and eye contact', 'Starting and ending together', 'Group performance exercises'] },
      { name: 'Chapter 4 · Confidence on Stage', points: ['Stage posture', 'Microphone basics', 'Audience interaction', 'Handling mistakes', 'Performance psychology'] },
      { name: 'Chapter 5 · The Circle of Fifths Made Easy', points: ['The musical clock', 'Friendly chord families', 'Key relationships', 'Common song progressions', 'Chord family activities'] },
      { name: 'Chapter 6 · Ear Training Adventure', points: ['Melody direction', 'Rhythm imitation', 'Chord mood recognition', 'Phrase echo exercises', 'Listening memory games'] }
    ]
  },
  {
    id: 'performance',
    level: 'Program 03 · Advanced',
    title: 'Performance Lab',
    icon: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>',
    tagline: 'An advanced practical course focused on live performance — preparing, rehearsing, presenting and owning the stage.',
    description:
      'The Performance Lab is an advanced practical course focused on live performance. Students learn how to prepare, rehearse, present, and perform confidently on stage.',
    objectives: [
      'Prepare complete performances independently.',
      'Develop professional stage habits.',
      'Improve audience communication.',
      'Experience rehearsal and showcase preparation.',
      'Build confidence through public performance.'
    ],
    chapters: [
      { name: 'Chapter 1 · Building a Performance', points: ['Song selection', 'Practice planning', 'Memorization techniques', 'Performance structure', 'Rehearsal scheduling'] },
      { name: 'Chapter 2 · The Stage Experience', points: ['Stage entry and exit', 'Body language', 'Microphone handling', 'Audience connection', 'Performance etiquette'] },
      { name: 'Chapter 3 · Studio and Creativity', points: ['Basic recording awareness', 'Performing with backing tracks', 'Simple improvisation', 'Creative musical exercises', 'Musical storytelling'] },
      { name: 'Chapter 4 · Graduation Showcase', points: ['Dress rehearsal', 'Final performance preparation', 'Stage coordination', 'Reflection and self-evaluation', 'Showcase presentation'] }
    ]
  },
  {
    id: 'songwriting',
    level: 'Program 04 · Aspiring Creators',
    title: 'Songwriting & Music Production',
    icon: '<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/>',
    tagline: 'Create original music — songwriting, melody, lyric writing, home recording and beginner-level production.',
    description:
      'This course is designed for students who wish to create original music. It introduces songwriting, melody writing, lyric writing, home recording, and beginner-level music production using a computer-based setup.',
    objectives: [
      'Write original songs.',
      'Understand song structure.',
      'Create melodies and chord progressions.',
      'Record basic demos.',
      'Learn the foundations of digital music production.'
    ],
    chapters: [
      { name: 'Chapter 1 · What Makes a Song?', points: ['Verse, chorus, bridge, intro, and outro', 'Song structure analysis', 'Listening and songwriting observation'] },
      { name: 'Chapter 2 · Melody Writing', points: ['Creating singable melodies', 'Repetition and variation', 'Melodic phrasing', 'Hook writing'] },
      { name: 'Chapter 3 · Lyric Writing', points: ['Themes and emotions', 'Storytelling in songs', 'Rhyme and rhythm', 'Writing exercises'] },
      { name: 'Chapter 4 · Chords for Songwriters', points: ['Popular chord progressions', 'Emotional effect of chords', 'Writing with four chords', 'Chord movement practice'] },
      { name: 'Chapter 5 · Introduction to Music Production', points: ['Home studio basics', 'Audio interface and microphone awareness', 'Recording simple vocals and instruments', 'Session organization'] },
      { name: 'Chapter 6 · FL Studio Basics', points: ['Interface overview', 'Playlist and channel rack', 'Piano roll basics', 'Drum programming', 'Simple arrangement'] },
      { name: 'Chapter 7 · MIDI & Virtual Instruments', points: ['MIDI keyboard basics', 'Playing virtual instruments', 'Editing MIDI notes', 'Layering sounds'] },
      { name: 'Chapter 8 · Build Your First Demo', points: ['Recording a song idea', 'Adding drums, chords, and melody', 'Basic mixing awareness', 'Exporting a demo track'] }
    ]
  },
  {
    id: 'musicsoul',
    level: 'Program 05 · Adults & Professionals',
    title: 'Music for Soul',
    icon: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    tagline: 'A relaxed, non-competitive program for working adults — music as joy, relaxation and personal wellbeing.',
    description:
      'Music for Soul is a relaxed and non-competitive program created for working professionals, homemakers, entrepreneurs, and adults who want music as a source of joy, relaxation, and personal wellbeing.',
    objectives: [
      'Enjoy music without academic pressure.',
      'Reduce stress through singing and playing.',
      'Learn favorite songs in a simple way.',
      'Build confidence for informal singing and playing.',
      'Experience music as a daily wellness practice.'
    ],
    chapters: [
      { name: 'Chapter 1 · Music for Relaxation', points: ['Breathing and sound', 'Gentle vocal exercises', 'Relaxed listening', 'Mindful music practice'] },
      { name: 'Chapter 2 · Sing Your Favorite Songs', points: ['Easy melody singing', 'Comfort range singing', 'Expression without perfection', 'Personal song selection'] },
      { name: 'Chapter 3 · Easy Guitar / Keyboard Accompaniment', points: ['Simple chords', 'Basic rhythm patterns', 'Singing while accompanying', 'Home practice routines'] },
      { name: 'Chapter 4 · Music and Emotions', points: ['Music for calmness', 'Music for energy', 'Music for reflection', 'Personal music journal'] },
      { name: 'Chapter 5 · Weekend Music Circle', points: ['Group singing', 'Informal performance', 'Listening and sharing', 'Community music activities'] },
      { name: 'Chapter 6 · Music as a Lifelong Companion', points: ['Creating a personal music routine', 'Continuing practice independently', 'Music for family and friends', 'Joyful lifelong learning'] }
    ]
  }
];