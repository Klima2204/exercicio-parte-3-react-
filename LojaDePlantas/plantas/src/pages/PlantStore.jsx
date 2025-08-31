"use client"
import StoreLayout from '../components/templates/StoreLayout';
import PlantGrid from '../components/organisms/PlantGrid';
import mockPlants from '../data/mockPlants';

export default function PlantStore() {
  return (
    <StoreLayout>
      <PlantGrid plants={mockPlants} />
    </StoreLayout>
  );
}
