import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import Logo from './Logo';
import LogoutBtn from './LogoutBtn';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setOpen(!open);
  };

  const navItems = [
    { name: "Home", slug: "/" },
    { name: "Weekly Pooja", slug: "/weekly-pooja" },
    { name: "Exclusive Pooja", slug: "/exclusive-pooja" },
    { name: "Kawach", slug: "/kawach" },
    { name: "Crystals", slug: "/crystals" },
    { name: "Blog", slug: "/blog" },
  ];

  // Animation variants for nav items
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3, ease: "easeOut" },
    }),
  };

  // Animation variants for mobile menu
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <>
      <header className="w-full bg-gradient-to-r from-[#E6E6FA] to-[#D8BFD8] text-gray-800 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Logo className="h-12 sm:h-14 md:h-16 w-auto" />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
              >
                <NavLink
                  to={item.slug}
                  className={({ isActive }) =>
                    `text-base lg:text-lg font-semibold transition-all duration-300 ${
                      isActive
                        ? "text-purple-600 border-b-2 border-purple-600"
                        : "text-gray-700 hover:text-purple-500 hover:border-b-2 hover:border-purple-300"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </motion.div>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {!authStatus ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Button
                  onClick={() => navigate('login')}
                  className="px-5 py-2.5 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-500 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Login
                </Button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <LogoutBtn
                  className="px-5 py-2.5 bg-transparent border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                />
              </motion.div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-full hover:bg-purple-100 transition-colors duration-200"
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-6 h-6 text-purple-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </motion.button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.nav
            className="lg:hidden bg-[#E6E6FA] text-gray-800 shadow-md"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <ul className="flex flex-col">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  custom={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <NavLink
                    to={item.slug}
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `block py-3 px-6 text-base font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-purple-100 text-purple-600"
                          : "text-gray-700 hover:bg-purple-50 hover:text-purple-500"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
                className="py-3 px-6"
              >
                {!authStatus ? (
                  <Button
                    onClick={() => {
                      navigate('login');
                      toggleMenu();
                    }}
                    className="w-full py-2.5 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-500 transition-all duration-300 shadow-md"
                  >
                    Login
                  </Button>
                ) : (
                  <LogoutBtn
                    className="w-full py-2.5 bg-transparent border-2 border-purple-600 text-purple-600 font-medium rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-md"
                  />
                )}
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;