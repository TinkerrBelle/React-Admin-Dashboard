'use client'

import { useState, useEffect } from 'react'
import styles from '../../styles/dashboard.module.css'
import StatCard from '../../components/StatCard'
import LoadingSpinner from '../../components/LoadingSpinner'
import UserTable from '../../components/UserTable'
import SearchBar from '../../components/SearchBar'


export default function DashboardPage() {

    // useState — we're creating 2 pieces of state
    // 1. users — starts as empty array, will be filled with API data
    // 2. loading — starts as true, will become false when data arrives
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    // New state — tracks what the user has typed in the search box
    // Starts as empty string because nothing is typed yet
    const [searchTerm, setSearchTerm] = useState('')


    // useEffect — runs once after the component loads on screen
    // The [] at the end means "only run this once, not on every render"
    useEffect(() => {

        // fetch() is built into the browser — no library needed
        // We're calling a free public API that returns fake user data
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())       // convert the response to JavaScript
            .then(data => {
                setUsers(data)               // put the data into our users state
                setLoading(false)            // tell React we're done loading
            })

    }, [])

    // While loading is true, show the spinner instead of the dashboard
    // The moment setLoading(false) is called above, React re-renders
    // and shows the real content below instead
    if (loading) {
        return <LoadingSpinner />
    }

    // Stats we calculate from the real API data
    // users.length gives us the total number of users returned
    const totalUsers = users.length
    const activeUsers = users.filter(u => u.id % 2 === 0).length
    const totalOrders = users.length * 8
    const revenue = users.length * 1240

    // Derived state — we never store this in useState
    // Every time React re-renders, this recalculates fresh
    // from the current users array and the current searchTerm
    const filteredUsers = users.filter(user => {
        // Convert everything to lowercase so search is not case sensitive
        // "john" matches "John", "JOHN", "jOhN" — all the same
        const term = searchTerm.toLowerCase()

        return (
            user.name.toLowerCase().includes(term) ||
            user.email.toLowerCase().includes(term) ||
            user.company.name.toLowerCase().includes(term)
        )
    })

    return (
        <div className={styles.dashboard}>

            {/* Stat Cards row */}
            {/* Each card is the same component — only the props are different */}
            {/* This is reusability in action */}
            <div className={styles.statsGrid}>
                <StatCard
                    title="Total Users"
                    value={totalUsers}
                    icon="👥"
                    color="#6366f1"
                    change={12}
                />
                <StatCard
                    title="Active Users"
                    value={activeUsers}
                    icon="✅"
                    color="#10b981"
                    change={8}
                />
                <StatCard
                    title="Total Orders"
                    value={totalOrders}
                    icon="📦"
                    color="#f59e0b"
                    change={-3}
                />
                <StatCard
                    title="Revenue"
                    value={`$${revenue.toLocaleString()}`}
                    icon="💰"
                    color="#ef4444"
                    change={21}
                />
            </div>

            {/* SearchBar sits between the cards and the table */}
            {/* We pass searchTerm so it knows what to display */}
            {/* We pass setSearchTerm as onSearch so it can update our state */}
            <SearchBar
                searchTerm={searchTerm}
                onSearch={setSearchTerm}
            />

            {/* We pass filteredUsers instead of users */}
            {/* UserTable doesn't know or care that it's filtered */}
            {/* It just renders whatever array it receives */}
            <UserTable users={filteredUsers} searchTerm={searchTerm} />
        </div>
    )
}