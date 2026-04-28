# Gara Backend API

This directory contains backend API routes for Gara marketplace.

## API Endpoints

### /api/listings
- GET: Retrieve all garage space listings (in-memory mock).
- POST: Submit a new garage space listing.

### /api/renter-waitlist
- GET: Retrieve the renter waitlist emails (in-memory mock).
- POST: Add an email to the renter waitlist.

## Notes
- Currently uses in-memory arrays for demonstration; should replace with persistent storage.
- Input validation included for required fields and formats.
- API built with Next.js App Router and TypeScript.

---

This is the initial backend API implementation for Gara's MVP phase. Integrate with frontend and extend as needed.