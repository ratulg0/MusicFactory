/**
 * THE MUSIC ROOM — Courses Module
 * Renders the five programs as accessible expanding cards and wires up
 * the accordion behaviour (one panel open at a time, keyboard friendly).
 */
import { COURSES } from './course-data.js';

function chapterCardHTML(chapters) {
  return chapters.map(ch => `
      <li class="course-card__chapter">
        <strong class="course-card__chapter-title">${ch.name}</strong>
        <ul class="course-card__chapter-points">
          ${ch.points.map(p => `<li>${p}</li>`).join('')}
        </ul>
      </li>`).join('');
}

function cardMarkup(course) {
  const icon = course.icon;
  return `
    <article class="course-card fade-up" id="${course.id}">
      <button class="course-card__header" aria-expanded="false" aria-controls="${course.id}-body">
        <span class="course-card__icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icon}</svg>
        </span>
        <span class="course-card__head">
          <span class="course-card__level">${course.level}</span>
          <span class="course-card__title">${course.title}</span>
          <span class="course-card__tagline">${course.tagline}</span>
        </span>
        <span class="course-card__toggle" aria-hidden="true">+</span>
      </button>
      <div class="course-card__body" id="${course.id}-body" aria-hidden="true">
        <div class="course-card__body-inner">
          <p class="course-card__desc">${course.description}</p>
          <div class="course-card__block">
            <h4 class="course-card__block-title">Course Objectives</h4>
            <ul class="course-card__objectives">
              ${course.objectives.map(o => `<li>${o}</li>`).join('')}
            </ul>
          </div>
          <div class="course-card__block">
            <h4 class="course-card__block-title">Chapters</h4>
            <ol class="course-card__chapters">
              ${chapterCardHTML(course.chapters)}
            </ol>
          </div>
        </div>
      </div>
    </article>`;
}

function renderCourses(root) {
  root.innerHTML = COURSES.map(cardMarkup).join('');
}

export function initCourseCards() {
  const roots = document.querySelectorAll('[data-course-cards]');
  if (!roots.length) return;

  roots.forEach(root => {
    renderCourses(root);

    const headers = root.querySelectorAll('.course-card__header');
    headers.forEach(btn => {
      btn.addEventListener('click', () => {
        const isOpen = btn.getAttribute('aria-expanded') === 'true';
        headers.forEach(other => {
          other.setAttribute('aria-expanded', 'false');
          other.closest('.course-card').classList.remove('is-open');
          const body = document.getElementById(other.getAttribute('aria-controls'));
          if (body) body.setAttribute('aria-hidden', 'true');
        });
        if (!isOpen) {
          btn.setAttribute('aria-expanded', 'true');
          btn.closest('.course-card').classList.add('is-open');
          const body = document.getElementById(btn.getAttribute('aria-controls'));
          if (body) body.setAttribute('aria-hidden', 'false');
        }
      });
    });
  });
}