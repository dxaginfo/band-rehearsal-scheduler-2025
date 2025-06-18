import { Server, Socket } from 'socket.io';

export function setupWebSocketHandlers(io: Server): void {
  io.on('connection', (socket: Socket) => {
    console.log('New client connected:', socket.id);

    // Join a room for a specific band
    socket.on('join_band', (bandId: string) => {
      socket.join(`band_${bandId}`);
      console.log(`Socket ${socket.id} joined room: band_${bandId}`);
    });

    // Join a room for a specific rehearsal
    socket.on('join_rehearsal', (rehearsalId: string) => {
      socket.join(`rehearsal_${rehearsalId}`);
      console.log(`Socket ${socket.id} joined room: rehearsal_${rehearsalId}`);
    });

    // Update availability for a rehearsal
    socket.on('update_availability', (data: { rehearsalId: string, userId: string, status: string }) => {
      // Broadcast to all clients in the rehearsal room except the sender
      socket.to(`rehearsal_${data.rehearsalId}`).emit('availability_updated', data);
      console.log(`Availability update broadcast to rehearsal_${data.rehearsalId}:`, data);
    });

    // New rehearsal created
    socket.on('create_rehearsal', (data: { bandId: string, rehearsalId: string, title: string }) => {
      // Broadcast to all clients in the band room including the sender
      io.to(`band_${data.bandId}`).emit('rehearsal_created', data);
      console.log(`New rehearsal broadcast to band_${data.bandId}:`, data);
    });

    // Rehearsal updated
    socket.on('update_rehearsal', (data: { bandId: string, rehearsalId: string, title: string }) => {
      // Broadcast to all clients in the band room including the sender
      io.to(`band_${data.bandId}`).emit('rehearsal_updated', data);
      console.log(`Rehearsal update broadcast to band_${data.bandId}:`, data);
    });

    // Disconnect handling
    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
    });
  });
}