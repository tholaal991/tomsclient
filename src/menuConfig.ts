
interface MenuItem {
    path: string;
    name: string;
    icon: JSX.Element;
    component?: string;
    children?: MenuItem[];
    // Add other properties as needed
  }
  
  const getMenuForRole = (roleType: string | undefined): MenuItem[] => {
    const commonMenu: MenuItem[] = [
      // Common menu items for all roles
    ];
  
    if (roleType === 'admin') {
      return [
        ...commonMenu,
        // Additional menu items for admin
      ];
    } else if (roleType === 'operator') {
      return [
        ...commonMenu,
        // Additional menu items for operator
      ];
    }
  
    // Default menu if role is unknown
    return commonMenu;
  };
  
  export default getMenuForRole;
  