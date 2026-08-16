export type TeamMember = {
  id: number
  name: string
  role: string
  image?: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Joshua Knott',
    role: 'Project Manager',
    },
  {
    id: 2,
    name: 'Samuel Lopez',
    role: 'Business Analyst',
    },
  {
    id: 3,
    name: 'Justin Chung',
    role: 'UI/UX Designer',
    },
  {
    id: 4,
    name: 'Saanvi Telukoti',
    role: 'Developer 1',
    },
  {
    id: 5,
    name: 'Cameron Nyugen',
    role: 'Developer 2',
    },
]