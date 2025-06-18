# Band Rehearsal Scheduler

A comprehensive web application designed to help bands and musical groups efficiently organize and manage their rehearsal schedules. The application streamlines the process of planning rehearsals, tracking member availability, sending reminders, and suggesting optimal rehearsal times based on member preferences and historical attendance data.

## 🎵 Features

### User Management
- User registration and authentication
- Role-based access control (band admin, band member, venue manager)
- Profile management with instrument/role specification
- Multiple band membership support

### Event Scheduling
- Create, edit, and delete rehearsal events
- Recurring rehearsal patterns
- Venue selection and management
- Duration and time slot configuration
- Calendar integration (Google Calendar, Apple Calendar, etc.)

### Availability Tracking
- Member availability submission for events
- Visual representation of group availability
- Automatic optimal time suggestion based on member availability
- Absence management and tracking

### Notifications
- Automated email/push notifications for new events
- Rehearsal reminders (24h, 1h before)
- Updates for schedule changes
- Custom notification preferences

### Attendance
- Check-in system for rehearsals
- Attendance history and analytics
- Absence patterns identification

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- PostgreSQL (v13 or higher)
- NPM or Yarn

### Installation

1. Clone this repository:
```
git clone https://github.com/dxaginfo/band-rehearsal-scheduler-2025.git
cd band-rehearsal-scheduler-2025
```

2. Install dependencies:
```
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Set up environment variables:
```
# Server environment variables (.env in server directory)
DATABASE_URL=postgresql://username:password@localhost:5432/rehearsal_scheduler
JWT_SECRET=your_jwt_secret
PORT=4000

# Client environment variables (.env in client directory)
REACT_APP_API_URL=http://localhost:4000
```

4. Initialize the database:
```
cd server
npm run db:migrate
npm run db:seed # (optional) Adds sample data
```

5. Start the development servers:
```
# Start the server (from server directory)
npm run dev

# Start the client (from client directory)
npm run start
```

6. Access the application at `http://localhost:3000`

## 🏗️ Architecture

The Rehearsal Scheduler application follows a modern three-tier architecture:

1. **Presentation Layer (Frontend)**
   - React SPA with responsive design
   - TypeScript for type safety
   - Redux Toolkit for state management
   - Material-UI for component library
   - FullCalendar for calendar visualization

2. **Application Layer (Backend)**
   - Node.js with Express API server
   - JWT authentication
   - Business logic for scheduling and availability analysis
   - WebSocket server for real-time updates

3. **Data Layer**
   - PostgreSQL database for persistent storage
   - Prisma ORM for database access
   - Transaction management for data integrity

## 📁 Project Structure

```
├── client/                   # Frontend application
│   ├── public/               # Static assets
│   ├── src/                  # Source code
│   │   ├── assets/           # Images, fonts, etc.
│   │   ├── components/       # Reusable UI components
│   │   ├── features/         # Feature-based modules
│   │   ├── hooks/            # Custom React hooks
│   │   ├── services/         # API service integrations
│   │   ├── store/            # Redux store configuration
│   │   ├── types/            # TypeScript type definitions
│   │   ├── utils/            # Utility functions
│   │   ├── App.tsx           # Main application component
│   │   └── index.tsx         # Application entry point
│   └── package.json          # Frontend dependencies
│
├── server/                   # Backend application
│   ├── src/                  # Source code
│   │   ├── config/           # Configuration files
│   │   ├── controllers/      # Request handlers
│   │   ├── middleware/       # Express middleware
│   │   ├── models/           # Data models
│   │   ├── routes/           # API routes
│   │   ├── services/         # Business logic
│   │   ├── utils/            # Utility functions
│   │   ├── websocket/        # WebSocket implementation
│   │   └── index.ts          # Server entry point
│   ├── prisma/               # Prisma schema and migrations
│   └── package.json          # Backend dependencies
│
├── .gitignore                # Git ignore file
├── docker-compose.yml        # Docker configuration
└── README.md                 # Project documentation
```

## 📝 API Documentation

API documentation is available at `/api/docs` when the server is running. This provides a Swagger UI interface for exploring and testing all available endpoints.

## 🧪 Testing

The project includes comprehensive test suites for both frontend and backend:

```
# Run frontend tests
cd client
npm test

# Run backend tests
cd server
npm test
```

## 🔒 Security

This application implements several security best practices:

- JWT for secure authentication
- Password hashing using bcrypt
- HTTPS enforcement in production
- Input validation and sanitization
- CSRF protection
- Rate limiting
- Content Security Policy

## 🌟 Integrations

The application can integrate with:
- Google Calendar/Apple Calendar for schedule synchronization
- Email services (SendGrid, AWS SES) for notifications
- Cloud storage for rehearsal materials
- Music streaming services for sharing rehearsal playlists

## 🤝 Contributing

Contributions are welcome! Please check out our [contribution guidelines](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- Band Rehearsal Scheduler Team
- Created as part of the music industry web application development project.

## ✨ Acknowledgements

Special thanks to the open-source community and all the libraries that made this project possible.