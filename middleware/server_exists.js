export default function ({ redirect }) {
    if (!localStorage.getItem('guildID')) {
      return redirect('/dashboard')
    }
  }
  