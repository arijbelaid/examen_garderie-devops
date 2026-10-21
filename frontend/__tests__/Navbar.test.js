import { render, screen } from '@testing-library/react';
import Navbar from '../app/components/Navbar';

describe('Composant Navbar', () => {
  it('doit afficher le titre "Ma Garderie"', () => {
    // 1. On affiche le composant Navbar
    render(<Navbar />);
    
    // 2. On cherche le texte "Ma Garderie" à l'écran
    const titreElement = screen.getByText('Ma Garderie');
    
    // 3. On vérifie qu'il est bien présent
    expect(titreElement).toBeInTheDocument();
  });
});
