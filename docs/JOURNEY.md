Journey Page — Design & Interaction Specification
Overview

The Journey page is a narrative-driven visualization of skill growth across technical domains. Unlike a traditional portfolio section that lists projects as isolated artifacts, this page is designed to communicate progression, depth, and learning evolution.

The core idea is to show how capabilities developed over time within each domain, not just what was built. The page functions as a visual learning map, emphasizing continuity, growth, and increasing complexity.

Design Philosophy
Why “Journey” and not “Projects”

This page is intentionally not a project gallery.

Projects are treated as milestones, not endpoints.

The emphasis is on progression of thinking, not feature lists.

Learning is shown as cumulative and directional.

The goal is to answer:

“How did this person grow within a domain?”

rather than:

“What projects does this person have?”

Core Concept
Domains as Islands

Each technical domain (e.g., OpenCV, Machine Learning, Web Development, Robotics) is represented as a top-level interactive node (referred to as an “island”).

Islands are always visible at the top of the page

They act as entry points into a learning path

Only one island is active at a time

Growth as a Flowing Ribbon

When a domain island is selected, a vertical ribbon-like structure flows downward from it.

The ribbon represents progression over time

It is continuous, organic, and slightly curved

It visually communicates evolution rather than discrete steps

This ribbon is the primary storytelling element of the page.

Milestones Along the Ribbon

Along each ribbon are ordered milestones, each representing a stage of growth within that domain.

Milestones are arranged strictly in increasing order of capability, such as:

Concepts / Foundations

Applied Implementation

Systems & Integration

Advanced / Research-Level Work

Each milestone corresponds to one or more projects that serve as evidence of learning at that stage.

Visual Hierarchy

Primary: Ribbon (growth path)

Secondary: Milestone nodes on the ribbon

Tertiary: Project cards (supporting artifacts)

Project cards should never dominate the layout. They exist to support the narrative created by the ribbon.

Interaction Model
Selecting a Domain

Clicking a domain island activates it

Any currently open ribbon collapses

The selected domain’s ribbon animates downward into view

The page may gently auto-scroll to the start of the ribbon

Ribbon Animation

Ribbon is drawn top-to-bottom using animation

Milestones appear sequentially (staggered)

Motion reinforces direction and growth

Milestone Interaction

Each milestone is visually tied to a growth label (not difficulty)

Hovering highlights the corresponding ribbon segment

Clicking a milestone reveals or focuses its project card(s)

Project Cards

Cards are anchored to milestones

Cards provide:

Project name

Short reflective description

Optional tech stack

Cards may expand or open a modal for more details

Cards should feel secondary and non-disruptive

Growth Labels (Important)

Milestones should not be labeled as difficulty (e.g., Beginner, Advanced).

They should describe capability maturity, such as:

Concepts

Pipelines

Systems

Research / Scale

This framing emphasizes learning depth rather than perceived skill level.

Behavior Rules

Only one domain ribbon visible at a time

Transitions must be animated (no abrupt content switching)

Content order is fixed and intentional

Layout should degrade gracefully if animations are disabled

Mobile layout must preserve the idea of flow, even if simplified

Technical Implementation Notes
Recommended Approach

Use SVG paths for ribbons to allow smooth curves and animation

Animate ribbon drawing using stroke-dasharray and stroke-dashoffset

Use component state to control:

Active domain

Ribbon visibility

Expanded milestones

Animation Guidelines

Subtle, intentional motion

Avoid excessive easing or bounce

Favor linear or ease-in-out transitions

Staggered reveals over simultaneous motion

Suggested Tech Stack
Frontend

React / Next.js (preferred for stateful interaction)

SVG for ribbons and connectors

CSS or utility-first styling (Tailwind or similar)

Animation

Framer Motion (recommended for React)

GSAP (alternative for fine-grained control)

Styling

Neutral background with strong accent color

Monospace font for metadata

Clean sans-serif for headings and body text

Accessibility & Usability

All content must be readable without relying on animation

Keyboard navigation should work for domain selection and cards

Motion should be reduced or disabled for users with reduced-motion preferences

Text contrast should remain high at all times

Success Criteria

This page is successful if:

A user can understand progression without clicking anything

The structure communicates growth at a glance

Projects feel contextualized, not dumped

The interaction feels intentional, not decorative

Summary

The Journey page is a learning visualization, not a project list.
It uses flow, hierarchy, and progression to tell a story of technical growth across domains. Every design and interaction decision should reinforce continuity, evolution, and depth.