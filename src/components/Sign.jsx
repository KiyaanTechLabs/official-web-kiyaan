"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useTheme } from "../context/ThemeContext";
import glowAnim from "../assets/lottie/ani.json"; // Success animation here
import "./Sign.scss";

const Sign = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const { darkMode } = useTheme();
    const router = useRouter();

    const toggleFormType = () => setIsSignup(!isSignup);
    const togglePassword = () => setShowPass(!showPass);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccess(true);

        setTimeout(() => {
            router.push("/");
        }, 3000); // Adjust time to match animation length
    };

    return (
        <div className={`sign-enhanced ${darkMode ? "dark" : "light"}`}>
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        className="lottie-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="lottie-panel"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 260, damping: 18 }}
                        >
                            <Player
                                autoplay
                                keepLastFrame
                                src={glowAnim}
                                className="lottie-center"
                            />
                            <p className="splash-text">Redirecting...</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {!showSuccess && (
                <motion.div
                    className="form-glass"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <motion.h2
                        key={isSignup ? "signup" : "login"}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.4 }}
                        className="form-title"
                    >
                        {isSignup ? "Create your Kiyaan Account" : "Welcome Back"}
                    </motion.h2>

                    <form onSubmit={handleSubmit} className="sign-form">
                        {isSignup && (
                            <motion.input
                                type="text"
                                placeholder="Full Name"
                                className="floating-input"
                                required
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1 }}
                            />
                        )}
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="floating-input"
                            required
                        />

                        <div className="password-wrap">
                            <input
                                type={showPass ? "text" : "password"}
                                placeholder="Password"
                                className="floating-input"
                                required
                            />
                            <button
                                type="button"
                                className="toggle-password"
                                onClick={togglePassword}
                            >
                                {showPass ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>

                        <motion.button
                            type="submit"
                            className="submit-glow"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.96 }}
                        >
                            {isSignup ? "Sign Up" : "Log In"}
                        </motion.button>
                    </form>

                    <p className="switch-text">
                        {isSignup ? "Already a user?" : "New here?"}{" "}
                        <button className="form-switch" onClick={toggleFormType}>
                            {isSignup ? "Log In" : "Create Account"}
                        </button>
                    </p>
                </motion.div>
            )}
        </div>
    );
};

export default Sign;