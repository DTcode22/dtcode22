import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function RightSidebar() {
  return (
    <aside className="hidden lg:block w-[18vw] h-[calc(100vh-4rem)] bg-muted/30 p-6">
      <div className="sticky top-6 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Latest Blog Posts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium text-sm mb-1">
                Building Scalable React Apps
              </h4>
              <p className="text-xs text-muted-foreground">Dec 15, 2023</p>
            </div>
            <div>
              <h4 className="font-medium text-sm mb-1">Next.js 14 Features</h4>
              <p className="text-xs text-muted-foreground">Dec 10, 2023</p>
            </div>
            <div>
              <h4 className="font-medium text-sm mb-1">
                TypeScript Best Practices
              </h4>
              <p className="text-xs text-muted-foreground">Dec 5, 2023</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Current Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm">Available for work</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Open to new opportunities and interesting projects
            </p>
          </CardContent>
        </Card>
      </div>
    </aside>
  );
}
