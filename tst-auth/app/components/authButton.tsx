"use client";
import Link from "next/link";
import { signInWithGoogle, signOut } from "../firebase/auth";
import { useUserContext } from "../firebase/context";
import Image from "next/image";

const defaultPath = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALQAvwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EADYQAQACAQIFAgIHBgcAAAAAAAABAgMEEQUSMUFRISJSYRNxgZGhscEyNEJi8PEVIyQzcpLR/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwD6WA0yAAAAAAAABETM7RG8+Ib6aLU36YpiPn6A0CX/AIbqdulf+zTm0+bB/uUmI89YFagBAAAAAAAAAAAAAAAABYaThs3iL596x2rHU4XpYvb6a8e2s+2PMrZLVYYsOPDG2OkV+pmCKPLVi9ZraImJ6xL0BR6vRZMWa0Y6XtTrExG+yL0naXTI+r0lNTXpEXjpZdTFCPb1tS81tG1onaYeKgAAAAAAAAAAAAREzO0dRu0VebV4o/m3+4F5gxxhw0xx/DDYDLQAAAAACp4xjiuWmSP4o2n7Fet+MR/p6T4v+kqhqIACAAAAAAAAAACTw399x/b+UozfoJ5dZin57Cr8BlQAAAAAEHjH7rX/AJx+UqdbcZn/ACccebb/AIKlqJQAQAAAAAAAAAAT+F6amWZy339kxy+vdAWnBbe3LXxMSVVkAyoAAAAACPrNNXU49rb81YnlmPKhdJeeWlrT2jdzaxKAKgAAAAAAAAAAlcOzRh1Mc07VtHLM+EUB0wg8JyTfTzSZ3mk/gnMtAAAAAPJmIjeekAicTzxi09qb++8bRHy7qVllvOTJa9pmZtO/qxaQAEAAAAAAAAAAAATOFZox6jltPpeNvt7LpzK64dq51FJpf9uses+UqxMARQABG4jmjFpbevut7YSJnaN1Dq9TbU5eafSsfsx4WDQArIAAAAAAAAAAAAAAseCx78s+Ij9VctuDV2w5Lebbfd/cqrABlQABzMxtMx4dM53U15NRlr4tKxK1gKgAAAAAAAAAAAAPaVte0VpWbTPaIWGn4Xafdnty/wAteoqFgw3z3imON57z2hfYMVcGKuOvSO/l7jx0xV5cdYrHyZpaoAgAAK7iektefpsUbzt7ojv81iA5kXmp0OLPvbbkv8Ufqq9To82DeZjmp8VWtRHAEAAAAAAAStJosmo2tPtx/FPf6hUWsTaYrWJmZ6RCw0/DL292eeSPhjqsNPpsWnjbHX172nrLcmmNeHDjw12x0iv6tgIoAAAAAAAAACJqOH4c281j6O3mOn3KvUaTLp/W9d6/FHRfnVdHMi31XDaZN7YdqW8dp/8AFVkx3xXmmSs1tHaVRiAIAyx0nJkrSOtp2BM4bo4zT9Llj2RPpHxLjoxx0jHStKxtFY2hky0AAAAAAAAAAAAAAAANOp09NRj5bx69rd4bgHN5cdsOS2O8esMVrxjDvSuaI9Y9J+r+vzVTSCVwyInWU37bz+DwBegMqAAAAAAAAAAAAAAAAAAj6+InR5d/h3UILEr/2Q=="


export default function AuthButton() {
    const { user } = useUserContext();

    return (
        <div>
            { user ?
            <div className="flex flex-row items-center gap-4">
                <h1 className="text-md font-bold">{user.displayName}</h1>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <Image alt="" src={user.photoURL ? user.photoURL : defaultPath} fill={true} className="rounded-full"/>
                    </div>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><Link href="/profile">Profile</Link></li>
                        <li><Link href="/documentation">Documentation</Link></li>
                        <li><button onClick={()=> signOut()}>Sign Out</button></li>
                    </ul>
                </div>
            </div> :
            <button onClick={() => signInWithGoogle()} className="btn btn-primary">Sign In</button>
            }
        </div>
    )
}
  