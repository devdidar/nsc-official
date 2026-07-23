export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      contact_messages: {
        Row: {
          id: string
          name: string
          email: string
          subject: string | null
          message: string
          read: boolean
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          subject?: string | null
          message: string
          read?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          subject?: string | null
          message?: string
          read?: boolean
          created_at?: string
        }
        Relationships: []
      }
      newsletter_subscribers: {
        Row: {
          id: string
          email: string
          subscribed_at: string
          active: boolean
        }
        Insert: {
          id?: string
          email: string
          subscribed_at?: string
          active?: boolean
        }
        Update: {
          id?: string
          email?: string
          subscribed_at?: string
          active?: boolean
        }
        Relationships: []
      }
      events: {
        Row: {
          id: string
          title: string
          tag: string
          date: string
          time: string
          city: string
          description: string
          grad: string
          status: string
          sort_order: number
        }
        Insert: {
          id?: string
          title: string
          tag: string
          date: string
          time: string
          city: string
          description: string
          grad: string
          status: string
          sort_order?: number
        }
        Update: {
          id?: string
          title?: string
          tag?: string
          date?: string
          time?: string
          city?: string
          description?: string
          grad?: string
          status?: string
          sort_order?: number
        }
        Relationships: []
      }
      bootcamps: {
        Row: {
          id: string
          name: string
          weeks: number
          level: string
          seats: number
          description: string
          stack: string[]
          gradient: string
          sort_order: number
        }
        Insert: {
          id?: string
          name: string
          weeks: number
          level: string
          seats: number
          description: string
          stack: string[]
          gradient: string
          sort_order?: number
        }
        Update: {
          id?: string
          name?: string
          weeks?: number
          level?: string
          seats?: number
          description?: string
          stack?: string[]
          gradient?: string
          sort_order?: number
        }
        Relationships: []
      }
      activities: {
        Row: {
          id: string
          icon_name: string
          title: string
          description: string
          tag: string
          sort_order: number
        }
        Insert: {
          id?: string
          icon_name: string
          title: string
          description: string
          tag: string
          sort_order?: number
        }
        Update: {
          id?: string
          icon_name?: string
          title?: string
          description?: string
          tag?: string
          sort_order?: number
        }
        Relationships: []
      }
      team_members: {
        Row: {
          id: string
          name: string
          role: string
          bio: string
          gradient: string
          type: string
          sort_order: number
        }
        Insert: {
          id?: string
          name: string
          role: string
          bio: string
          gradient: string
          type: string
          sort_order?: number
        }
        Update: {
          id?: string
          name?: string
          role?: string
          bio?: string
          gradient?: string
          type?: string
          sort_order?: number
        }
        Relationships: []
      }
      research_papers: {
        Row: {
          id: string
          title: string
          area: string
          year: number
          authors: string
          status: string
          link_url: string | null
          sort_order: number
        }
        Insert: {
          id?: string
          title: string
          area: string
          year: number
          authors: string
          status: string
          link_url?: string | null
          sort_order?: number
        }
        Update: {
          id?: string
          title?: string
          area?: string
          year?: number
          authors?: string
          status?: string
          link_url?: string | null
          sort_order?: number
        }
        Relationships: []
      }
      resources: {
        Row: {
          id: string
          icon_name: string
          title: string
          description: string
          tag: string
          link_url: string | null
          sort_order: number
        }
        Insert: {
          id?: string
          icon_name: string
          title: string
          description: string
          tag: string
          link_url?: string | null
          sort_order?: number
        }
        Update: {
          id?: string
          icon_name?: string
          title?: string
          description?: string
          tag?: string
          link_url?: string | null
          sort_order?: number
        }
        Relationships: []
      }
      faqs: {
        Row: {
          id: string
          question: string
          answer: string
          sort_order: number
        }
        Insert: {
          id?: string
          question: string
          answer: string
          sort_order?: number
        }
        Update: {
          id?: string
          question?: string
          answer?: string
          sort_order?: number
        }
        Relationships: []
      }
      gallery_items: {
        Row: {
          id: string
          height: number
          gradient: string
          caption: string
          sort_order: number
        }
        Insert: {
          id?: string
          height: number
          gradient: string
          caption: string
          sort_order?: number
        }
        Update: {
          id?: string
          height?: number
          gradient?: string
          caption?: string
          sort_order?: number
        }
        Relationships: []
      }
      projects: {
        Row: {
          id: string
          name: string
          stack: string
          description: string
          sort_order: number
        }
        Insert: {
          id?: string
          name: string
          stack: string
          description: string
          sort_order?: number
        }
        Update: {
          id?: string
          name?: string
          stack?: string
          description?: string
          sort_order?: number
        }
        Relationships: []
      }
      site_stats: {
        Row: {
          id: string
          value: number
          suffix: string
          label: string
          sort_order: number
        }
        Insert: {
          id?: string
          value: number
          suffix: string
          label: string
          sort_order?: number
        }
        Update: {
          id?: string
          value?: number
          suffix?: string
          label?: string
          sort_order?: number
        }
        Relationships: []
      }
      timeline: {
        Row: {
          id: string
          year: string
          title: string
          description: string
          sort_order: number
        }
        Insert: {
          id?: string
          year: string
          title: string
          description: string
          sort_order?: number
        }
        Update: {
          id?: string
          year?: string
          title?: string
          description?: string
          sort_order?: number
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          id: string
          name: string
          role: string
          quote: string
          sort_order: number
        }
        Insert: {
          id?: string
          name: string
          role: string
          quote: string
          sort_order?: number
        }
        Update: {
          id?: string
          name?: string
          role?: string
          quote?: string
          sort_order?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
