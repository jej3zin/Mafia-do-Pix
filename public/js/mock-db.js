// arquivo temporário public/js/mock-db.js
export const mockUsers = [
  {
    id: 'u1',
    username: 'jej3zin',
    name: 'Jean',
    avatar: 'https://avatars.githubusercontent.com/u/127148233?v=4',
    bio: 'Construindo a Máfia. Ihneeeeeeeeeeee',
    followers: 24,
    following: 1,
  },
  {
    id: 'u2',
    username: 'pikapika_pau',
    name: 'PIKA PIKA PAU',
    avatar: '/asset/imgs/pikapika.webp',
  },
  {
    id: 'u3',
    username: 'fabricio',
    name: 'FABRICIO©®©®©®©®©®©®©®©®©® ',
    avatar: '/asset/imgs/fabricio.png',
  },
  {
    id: 'u4',
    username: 'lendario',
    name: 'O Lendário José',
    avatar: '/asset/imgs/lendario.jpeg',
  },
  {
    id: 'u5',
    username: 'caua_prime',
    name: 'Bundas budantes',
    avatar: '/asset/imgs/Cauã.jpeg',
  },
  {
    id: 'u6',
    username: 'ronaldofiel',
    name: 'Ronaldo, O Fiel',
    avatar: '/asset/imgs/Ronaldo.jpeg',
  },
  {
    id: 'u7',
    username: 'luupe',
    name: 'Luiz, O Alfa',
    avatar: '/asset/imgs/luupe.jpg',
  },
  {
    id: 'u8',
    username: 'bob_leprozo',
    name: 'Bob Leprozo',
    avatar: '/asset/imgs/bob esponja.jpg',
  },
  {
    id: 'u9',
    username: 'daniel',
    name: 'Daniel, que libera o Anel',
    avatar: '/asset/imgs/Daniel.jpg',
  },
  {
    id: 'u10',
    username: 'felipeg',
    name: 'Felipe Gabriel',
    avatar: '/asset/imgs/Felipe Gabriel.jpg',
  },
  {
    id: 'u11',
    username: 'notnot',
    name: 'NotNot, A Mulher',
    avatar: '/asset/imgs/notnot.webp',
  },
  {
    id: 'u12',
    username: 'swoozy',
    name: 'Swoozy Based',
    avatar: '/asset/imgs/Swoozy.jpeg',
  },
  {
    id: 'u13',
    username: 'zenitsu',
    name: 'Rayzin',
    avatar: '/asset/imgs/zenitsu.jpg',
  },
  {
    id: 'u14',
    username: 'Willzen',
    name: 'Willzen',
    avatar: '/asset/imgs/Willzen.jpeg',
  },
  {
    id: 'u15',
    username: 'mark_sinistro87',
    name: 'Mark — Filósofo',
    avatar: '/asset/imgs/mark.jpg',
  },
];

export const mockPosts = [
  {
    id: 'p1',
    userId: 'u1',
    content: 'Primeiro post da Máfia do Pix 😈, fino senhores 🍷🗿',
    likes: 100,
    dislikes: 1,
    comments: 15,
    saves: 0,
    shares: 7,
    tags: [],
    createdAt: '2026-01-05, 11:00',
  },
  {
    id: 'p2',
    userId: 'u4',
    content:
      'çtzçtzçtzçtzçtzçtzçtzçtzçtzçtzçtzçtzçtzçtzçtzçtzçtzçtzçtzçtzçtzçtzçtzçtzçtzçtzçtzçtzçtzçtzçtzçtzçtzçtzçtzçtzçtzçtzçtzçtzçtzçtz',
    likes: 25,
    tags: ['spam'],
    createdAt: '2026-01-04',
  },
  {
    id: 'p3',
    userId: 'u5',
    content:
      'Ataque coordenado do cauã HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
    likes: 40,
    tags: ['texts', 'spam'],
    createdAt: '2026-01-03',
  },
  {
    id: 'p4',
    userId: 'u6',
    content:
      'RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO RO',
    likes: 40,
    tags: ['spam'],
    createdAt: '2026-01-03',
  },
  {
    id: 'p5',
    userId: 'u7',
    content:
      'Eu dou a bunda, eu amo dar a bunda, eu vou bater o recorde de dar a bunda, eu vou dar a bunda para 2048 cavalos 🥵😈💧',
    likes: 2080,
    tags: ['texts'],
    createdAt: '2026-01-03',
  },
  {
    id: 'p6',
    userId: 'u14',
    content:
      'TÇKZTÇKZTÇKZTÇKZTÇKZTÇKZTÇKZTÇKZTÇKZTÇKZTÇKZTÇKZTÇKZTÇKZTÇKZTÇKZTÇKZTÇKZTÇKZTÇKZTÇKZTÇKZTÇKZTÇKZTÇKZTÇKZTÇKZTÇKZTÇKZTÇKZTÇKZ',
    likes: 40,
    tags: ['texts', 'spam'],
    createdAt: '2026-01-03',
  },
  {
    id: 'p7',
    userId: 'u2',
    content:
      'Boa noite Tinta de Pneu, gostaria de sugerir Dark Souls gosto bastante...',
    likes: 24,
    tags: ['goodnight'],
    createdAt: '2026-01-03',
  },
  {
    id: 'p8',
    userId: 'u2',
    content:
      '¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶',
    likes: 40,
    tags: ['spam'],
    createdAt: '2026-01-03',
  },
  {
    id: 'p9',
    userId: 'u3',
    content:
      '©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®©®',
    likes: 24,
    tags: ['spam'],
    createdAt: '2026-01-03',
  },
  /* Alfabeto */
  {
    id: 'p10',
    userId: 'u8',
    content:
      'A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A. A',
    likes: 40,
    tags: ['alphabet'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p11',
    userId: 'u8',
    content:
      'B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B. B',
    likes: 40,
    tags: ['alphabet'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p12',
    userId: 'u8',
    content:
      'C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C. C',
    likes: 40,
    tags: ['alphabet'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p13',
    userId: 'u8',
    content:
      'D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D. D',
    likes: 40,
    tags: ['alphabet'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p14',
    userId: 'u8',
    content:
      'E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E. E',
    likes: 40,
    tags: ['alphabet'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p15',
    userId: 'u8',
    content:
      'F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F. F',
    likes: 40,
    tags: ['alphabet'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p16',
    userId: 'u8',
    content:
      'G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G. G',
    likes: 40,
    tags: ['alphabet'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p17',
    userId: 'u8',
    content:
      'H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H. H',
    likes: 40,
    tags: ['alphabet'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p18',
    userId: 'u8',
    content:
      'I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I. I',
    likes: 40,
    tags: ['alphabet'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p19',
    userId: 'u8',
    content:
      'J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J. J',
    likes: 40,
    tags: ['alphabet'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p20',
    userId: 'u8',
    content:
      'K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K. K',
    likes: 40,
    tags: ['alphabet'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p21',
    userId: 'u8',
    content:
      'L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L. L',
    likes: 40,
    tags: ['alphabet'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p22',
    userId: 'u8',
    content:
      'M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M. M',
    likes: 40,
    tags: ['alphabet'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p23',
    userId: 'u8',
    content:
      'N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N. N',
    likes: 40,
    tags: ['alphabet'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p24',
    userId: 'u8',
    content:
      'O. O. O. O. O. O. O. O. O. O. O. O. O. O O. O. O. O. O. O. O. O. O. O. O. O. O. O. O. O. O. O. O. O. O. O. O. O. O. O. O O. O. O. O. O. O. O. O. O. O. O. O. O. O. O. O. O. O. O. O. O. O. O. O. O. O. O O. O. O. O. O. O. O. O. O. O. O. O. O. O. O. O. O. O',
    likes: 40,
    tags: ['alphabet'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p25',
    userId: 'u8',
    content:
      'P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P. P',
    likes: 40,
    tags: ['alphabet'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p26',
    userId: 'u8',
    content:
      'Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q. Q',
    likes: 40,
    tags: ['alphabet'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p27',
    userId: 'u8',
    content:
      'R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R. R',
    likes: 40,
    tags: ['alphabet'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p28',
    userId: 'u8',
    content:
      'S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S. S',
    likes: 40,
    tags: ['alphabet'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p29',
    userId: 'u8',
    content:
      'T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T. T',
    likes: 40,
    tags: ['alphabet'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p30',
    userId: 'u8',
    content:
      'U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U. U',
    likes: 40,
    tags: ['alphabet'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p31',
    userId: 'u8',
    content:
      'V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V. V',
    likes: 40,
    tags: ['alphabet'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p32',
    userId: 'u8',
    content:
      'W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W. W',
    likes: 40,
    tags: ['alphabet'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p33',
    userId: 'u8',
    content:
      ' X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X. X',
    likes: 40,
    tags: ['alphabet'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p34',
    userId: 'u8',
    content:
      'Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z. Z',
    likes: 40,
    tags: ['alphabet'],
    createdAt: '2026-01-07, 12:03',
  },
  /* Números */
  {
    id: 'p35',
    userId: 'u11',
    content:
      '1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.',
    likes: 40,
    tags: ['numbers'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p36',
    userId: 'u11',
    content:
      '1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?',
    likes: 40,
    tags: ['numbers'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p37',
    userId: 'u11',
    content:
      '2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.2.',
    likes: 40,
    tags: ['numbers'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p38',
    userId: 'u11',
    content:
      '2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?2?',
    likes: 40,
    tags: ['numbers'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p39',
    userId: 'u11',
    content:
      '3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.3.',
    likes: 40,
    tags: ['numbers'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p40',
    userId: 'u11',
    content:
      '3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?3?',
    likes: 40,
    tags: ['numbers'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p41',
    userId: 'u11',
    content:
      '4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.4.',
    likes: 40,
    tags: ['numbers'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p42',
    userId: 'u11',
    content:
      '4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?',
    likes: 40,
    tags: ['numbers'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p43',
    userId: 'u11',
    content:
      '5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.',
    likes: 40,
    tags: ['numbers'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p44',
    userId: 'u11',
    content:
      '5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?5?',
    likes: 40,
    tags: ['numbers'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p45',
    userId: 'u11',
    content:
      '6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.6.',
    likes: 40,
    tags: ['numbers'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p46',
    userId: 'u11',
    content:
      '6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?6?',
    likes: 40,
    tags: ['numbers'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p47',
    userId: 'u11',
    content:
      '7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.7.',
    likes: 40,
    tags: ['numbers'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p48',
    userId: 'u11',
    content:
      '7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?7?',
    likes: 40,
    tags: ['numbers'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p49',
    userId: 'u11',
    content:
      '8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.8.',
    likes: 40,
    tags: ['numbers'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p50',
    userId: 'u11',
    content:
      '8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?8?',
    likes: 40,
    tags: ['numbers'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p51',
    userId: 'u11',
    content:
      '9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.',
    likes: 40,
    tags: ['numbers'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p52',
    userId: 'u11',
    content:
      '9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?',
    likes: 40,
    tags: ['numbers'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p53',
    userId: 'u11',
    content:
      '10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.1',
    likes: 40,
    tags: ['numbers'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p54',
    userId: 'u11',
    content:
      '10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?10?1',
    likes: 40,
    tags: ['numbers'],
    createdAt: '2026-01-07, 12:03',
  },
  /* Mano, Porquê */
  {
    id: 'p55',
    userId: 'u5',
    content:
      'Mano, Porquê chupar pau é tão gostoso? Tipo o simples formato dele é gostoso contornar com a língua. O sabor é gostoso, o melzinho que solta quando você da aquela sugada na pontinha que faz aquele elo transparente da glande até o seu sorriso de tesão.',
    likes: 40,
    tags: ['bro'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p56',
    userId: 'u5',
    content:
      'Mano, Porquê chupar buceta é tão gostoso? Tipo o simples formato de presunto é fácil de contornar com a língua. O sabor é gostoso, o melzinho que solta quando você da aquela sugada nas beiços até o seu sorriso de tesão.',
    likes: 40,
    tags: ['bro'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p57',
    userId: 'u5',
    content:
      'Mano, Porquê chupar seios é tão gostoso? Tipo o simples formato de cilindro é fácil de contornar com a língua. O sabor é gostoso, o leite que solta quando você da aquela sugada nas pontas até o seu sorriso de tesão.',
    likes: 40,
    tags: ['bro'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p58',
    userId: 'u5',
    content:
      'Mano, Porquê gozar é tão bom? Tipo o simples formato da pika para bater uma é facíl. A sensação é magnifíca e o leitinho que sai, cor e gosto me deixa molhadinho',
    likes: 40,
    tags: ['bro'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p59',
    userId: 'u4',
    content:
      'Mano, Porquê servir a Deus é tão gostoso? Tipo o simples ato de adorar a ele é gostoso e grandioso. Seguir ele é gostoso, o agir da benção no momento certo que faz cada joelho no chão valer a pena pra agradecê-lo.',
    likes: 40,
    tags: ['bro'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p60',
    userId: 'u5',
    content:
      'Mano, Porquê xhupar o luupe é tão bom? Tipo o simples formato da bandidagem é gostoso contornar com a língua, o sabor é gostoso, o melzinho que forma quando ele rouba dinheiro é de deficiente e dá aquela sugada na pontinha da glande até seu sorriso de ladrão',
    likes: 40,
    tags: ['bro'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p61',
    userId: 'u5',
    content:
      'Mano, Porquê chupar ku é tão bom? tipo o simples formato redondo é algo que me excita bastante, só pensar em chupar um ku todo Calabriado de bosta eu já fico durasso, jorro litros.',
    likes: 40,
    tags: ['bro'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p62',
    userId: 'u5',
    content:
      'Mano, Porquê cagar é tão bom? tipo a simples vontade de sentar na privada e soltar o barroso é gostoso, o cheiro é uma delicia, e aquele líquido quentinho',
    likes: 40,
    tags: ['bro'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p63',
    userId: 'u3',
    content:
      'Faço força para a merda subir, faço força para a merda descer, fico me autocomendo com a bosta zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
    likes: 40,
    tags: ['texts'],
    createdAt: '2026-01-07, 12:03',
  },
  {
    id: 'p64',
    userId: 'u6',
    content:
      'Boa Noite graxa de geladeira, coma minha bundinha ihneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    likes: 40,
    tags: ['goodnight'],
    createdAt: '2026-01-07, 12:57',
  },
  {
    id: 'p64',
    userId: 'u6',
    content:
      'Boa Noite Suco de graxa, sentei no cabo da vassoura e espirrei ihneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    likes: 40,
    tags: ['goodnight'],
    createdAt: '2026-01-07, 12:57',
  },
  {
    id: 'p64',
    userId: 'u6',
    content:
      'Boa Noite Leite de Boi, sujiro qi mimame ihneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    likes: 40,
    tags: ['goodnight'],
    createdAt: '2026-01-07, 12:57',
  },
  {
    id: 'p64',
    userId: 'u6',
    content:
      'Boa Noite Gasolina do fiat Uno, sentei na tora do negão e acordei em cadeira de rodas ihneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    likes: 40,
    tags: ['goodnight'],
    createdAt: '2026-01-07, 12:57',
  },
  {
    id: 'p65',
    userId: 'u6',
    content:
      '$ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ ',
    likes: 25,
    tags: ['spam'],
    createdAt: '2026-01-20, 07:57pm',
  },
  {
    id: 'p66',
    userId: 'u6',
    content:
      '$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?$?',
    likes: 10,
    tags: ['spam'],
    createdAt: '2026-01-20, 07:58pm',
  },
  {
    id: 'p67',
    userId: 'u6',
    content:
      '$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿$¿',
    likes: 12,
    tags: ['spam'],
    createdAt: '2026-01-20, 07:59pm',
  },
  {
    id: 'p68',
    userId: 'u6',
    content:
      'ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ÕRL, ',
    likes: 50,
    tags: ['spam'],
    createdAt: '2026-01-20, 08:00pm',
  },
  {
    id: 'p69',
    userId: 'u6',
    content:
      'ÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇ',
    likes: 23,
    tags: ['spam'],
    createdAt: '2026-01-20, 08:15pm',
  },
  {
    id: 'p70',
    userId: 'u3',
    content:
      'DARÃÃAA RÃÃAA ARÃÃAA RÃÃAA DRÃÃAA RÃÃAA RÃÃAA ARÃÃAA RÃÃAA DRÃÃAA RÃÃAA RÃÃAA DARÃÃAA RÃÃAA ARÃÃAA RÃÃAA DRÃÃAA RÃÃAA RÃÃAA ARÃÃAA RÃÃAA DRÃÃAA RÃÃAA RÃÃAA DARÃÃAA RÃÃAA ARÃÃAA RÃÃAA DRÃÃAA RÃÃAA RÃÃAA ARÃÃAA RÃÃAA DRÃÃAA RÃÃAA RÃÃAA DARÃÃAA RÃÃAA AR',
    likes: 25,
    tags: ['spam'],
    createdAt: '2026-01-20, 07:57pm',
  },
  {
    id: 'p71',
    userId: 'u8',
    content:
      'PÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇPÇ',
    likes: 25,
    tags: ['spam'],
    createdAt: '2026-01-20, 08:01pm',
  },
  {
    id: 'p72',
    userId: 'u9',
    content:
      'RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RARA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RARA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA RA ',
    likes: 25,
    tags: ['spam'],
    createdAt: '2026-01-20, 07:57pm',
  },
  {
    id: 'p73',
    userId: 'u10',
    content:
      'KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU KU K',
    likes: 25,
    tags: ['spam'],
    createdAt: '2026-01-20, 09:57pm',
  },
  {
    id: 'p74',
    userId: 'u9',
    content:
      'Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û Û ',
    likes: 25,
    tags: ['spam'],
    createdAt: '2026-01-20, 10:21pm',
  },
  {
    id: 'p75',
    userId: 'u11',
    content:
      'CALADOXXX,CALADOXXX,CALADOXXX,CALADOXXX,CALADOXXX,CALADOXXX,CALADOXXX,CALADOXXX,CALADOXXX,CALADOXXX,CALADOXXX,CALADOXXX,CALADOXXX,CALADOXXX,CALADOXXX,CALADOXXX,CALADOXXX,CALADOXXX,CALADOXXX,CALADOXXX,CALADOXXX,CALADOXXX,CALADOXXX,CALADOXXX,CALADOXXX,',
    likes: 25,
    tags: ['spam'],
    createdAt: '2026-01-20, 10:05pm',
  },
  {
    id: 'p76',
    userId: 'u9',
    content:
      'ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇML ÇM',
    likes: 25,
    tags: ['spam'],
    createdAt: '2026-01-20, 10:12pm',
  },
  {
    id: 'p77',
    userId: 'u4',
    content: 'BOA NOITE, MANDA SALVE PICOLÉ DE ASFALTO',
    likes: 73,
    tags: ['goodnight'],
    createdAt: '2026-01-20, 10:17pm',
  },
  {
    id: 'p78',
    userId: 'u2',
    content:
      'ÇMLÇMLÇML ÇMLÇMLÇML ÇMLÇMLÇML ÇMLÇMLÇML ÇMLÇMLÇML ÇMLÇMLÇML ÇMLÇMLÇML ÇMLÇMLÇML ÇMLÇMLÇML ÇMLÇMLÇML ÇMLÇMLÇML ÇMLÇMLÇML ÇMLÇMLÇML ÇMLÇMLÇML ÇMLÇMLÇML ÇMLÇMLÇML ÇMLÇMLÇML ÇMLÇMLÇML ÇMLÇMLÇML ÇMLÇMLÇML ÇMLÇMLÇML ÇMLÇMLÇML ÇMLÇMLÇML ÇMLÇMLÇML ÇMLÇMLÇML ',
    likes: 73,
    tags: ['spam'],
    createdAt: '2026-02-05, 07:20pm',
  },
  {
    id: 'p79',
    userId: 'u15',
    content:
      '€ £ € £ RA DST HIV RA SO DST SO HIV€ £ € £ RA DST HIV RA SO DST SO HIV € £ € £ RA DST HIV RA SO DST SO HIV€ £ € £ RA DST HIV RA SO DST SO HIV € £ € £ RA DST HIV RA SO DST SO HIV€ £ € £ RA DST HIV RA SO DST SO HIV € £ € £ RA DST HIV RA SO DST SO HIV€ ',
    likes: 101,
    tags: ['spam'],
    createdAt: '2026-02-05, 07:23pm',
  },
  {
    id: 'p80',
    userId: 'u3',
    content:
      '¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă? ¡ă',
    likes: 101,
    tags: ['spam'],
    createdAt: '2026-02-05, 07:23pm',
  },
  {
    id: 'p81',
    userId: 'u5',
    content:
      'Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?\?Û?/?',
    likes: 101,
    tags: ['spam'],
    createdAt: '2026-02-05, 07:23pm',
  },
  {
    id: 'p82',
    userId: 'u7',
    content:
      '$?¿©®Ç/\$?¿©®Ç/\$?¿©®Ç/\$?¿©®Ç/\$?¿©®Ç/\$?¿©®Ç/\$?¿©®Ç/\$?¿©®Ç/\$?¿©®Ç/\$?¿©®Ç/\$?¿©®Ç/\$?¿©®Ç/\$?¿©®Ç/\$?¿©®Ç/\$?¿©®Ç/\$?¿©®Ç/\$?¿©®Ç/\$?¿©®Ç/\$?¿©®Ç/\$?¿©®Ç/\$?¿©®Ç/\$?¿©®Ç/\$?¿©®Ç/\$?¿©®Ç/\$?¿©®Ç/\$?¿©®Ç/\$?¿©®Ç/\$?¿©®Ç/\$?¿©®Ç/\$?¿©®Ç/\$?¿©®Ç/\$?',
    likes: 101,
    tags: ['spam'],
    createdAt: '2026-02-05, 07:23pm',
  },
  {
    id: 'p83',
    userId: 'u9',
    content:
      '!,?#?$?!,?#?$?!,#?$?,!?#$?!,?#$?!,#?$?,!?#$?!,?#$?!,#?$?,!?#$?!,?#$?!,#?$?,!?#$?!,?#$?!,#?$?,!?#$?!,?#$?!,#?$?,!?#$?!,?#$?!,#?$?,!?#$?!,?#$?!,#?$?,!?#$?!,?#$?!,#?$?,!?#$?!,?#$?!,#?$?,!?#$?!,?#$?!,#?$?,!?#$?!,?#$?!,#?$?,!?#$?!,?#$?!,#?$?,!?#$?!,?#$?!,#?$?,!?#$?!,?#$?!,#?$?,!?#$?!,?#$?!,#?$?,!?#$?!,?#$?!,#?$?',
    likes: 101,
    tags: ['spam'],
    createdAt: '2026-02-05, 07:23pm',
  },
];
