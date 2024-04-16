import { SectionType } from '$lib/model/section-type';
import { writable } from 'svelte/store';

export default class SectionTracker{
    private static observer: IntersectionObserver;
    static currentSectionType =  writable<SectionType>();
    static startTracking(){
        const sectionsTypes = Object.values(SectionType);
        SectionTracker.observer = SectionTracker.createObserver(SectionTracker.callback);
        sectionsTypes
            .forEach(section => 
                SectionTracker.observer.observe(document.querySelector(`#${section}`) as Element)
            );
    }

    static stopTracking(){
        SectionTracker.observer.disconnect();
    }

    private static createObserver( callback: (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void) : IntersectionObserver {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1
          };
        return new IntersectionObserver(callback, options);
    }

    private static callback(entries: IntersectionObserverEntry[], observer: IntersectionObserver): void {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            SectionTracker.currentSectionType.set(entry.target.id as SectionType);
          }
        });
      }
} 
  
  
