import { Metadata } from 'next';
import { Suspense } from 'react';
import { OrganizerPasswordResetForm } from '@/components/organizer/OrganizerPasswordResetForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Reset Password | DTP Attendance Organizer',
  description: 'Reset your password for the DTP Attendance organizer portal',
};

export default function OrganizerResetPasswordPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Shield className="h-8 w-8 text-indigo-600" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            DTP Attendance System
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Organizer Portal - University of Mindanao Digos College
          </p>
        </div>

        {/* Password Reset Form */}
        <Suspense fallback={
          <Card className="w-full max-w-md mx-auto">
            <CardHeader className="text-center">
              <CardTitle>Loading...</CardTitle>
              <CardDescription>Please wait while we load the reset form.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="animate-pulse space-y-4">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-10 bg-gray-200 rounded"></div>
                <div className="h-10 bg-gray-200 rounded"></div>
              </div>
            </CardContent>
          </Card>
        }>
          <OrganizerPasswordResetForm />
        </Suspense>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500">
          <p>© 2025 University of Mindanao Digos College - DTP. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
