import React from 'react';
import { assets } from '../../assets/assets';
import {
  LayoutDashboardIcon,
  ListCollapseIcon,
  ListIcon,
  PlusSquareIcon,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  const user = {
    firstName: 'Admin',
    lastName: 'User',
    imageUrl: assets.profile,
  };

  const adminNavlinks = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboardIcon },
    { name: 'Add Shows', path: '/admin/add-shows', icon: PlusSquareIcon },
    { name: 'List Shows', path: '/admin/list-shows', icon: ListIcon },
    { name: 'List Bookings', path: '/admin/list-bookings', icon: ListCollapseIcon },
  ];

  return (
    <div className="h-[calc(100vh-64px)] flex flex-col items-center pt-8
      w-full md:max-w-60 border-r border-gray-300/20 text-sm">

      {/* PROFILE */}
      <img
        src={user.imageUrl}
        alt="profile"
        className="h-9 w-9 md:h-14 md:w-14 rounded-full"
      />
      <p className="mt-2 text-base max-md:hidden">
        {user.firstName} {user.lastName}
      </p>

      {/* NAV LINKS */}
      <div className="w-full mt-6">
        {adminNavlinks.map((link, index) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={index}
              to={link.path}
              end
              className={({ isActive }) =>
                `relative flex items-center gap-2 w-full py-2.5
                 max-md:justify-center md:pl-10
                 text-gray-400 hover:text-white
                 ${isActive ? 'bg-primary/15 text-primary group' : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className="w-5 h-5" />
                  <p className="max-md:hidden">{link.name}</p>

                  {isActive && (
                    <span className="absolute left-0 w-1.5 h-10 bg-primary rounded-r" />
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default AdminSidebar;
