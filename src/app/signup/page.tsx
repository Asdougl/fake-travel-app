import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation'

export default function Page() {
  const signUp = async () => {
    "use server"
    // wait 1 second
    await new Promise((resolve) => setTimeout(resolve, 1000));
    redirect('/')
  }
  return (
    <div>
      <h1>Signup</h1>
      <form action={signUp}>
        <input type="text" name="username" id="username" />
        <input type="password" name="password" id="password" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}