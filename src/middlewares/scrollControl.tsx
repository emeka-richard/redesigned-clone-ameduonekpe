const scrollControl = (id: string): void => {
    const section: HTMLElement | null = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  export default scrollControl;
  