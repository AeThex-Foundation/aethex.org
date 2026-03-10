'use client';

import { useEffect, useState } from 'react';
import { Users, MessageCircle } from 'lucide-react';

interface DiscordWidgetProps {
  serverId: string;
  inviteLink: string;
}

interface DiscordData {
  name: string;
  presence_count: number;
  members: Array<{
    id: string;
    username: string;
    avatar_url: string;
    status: string;
  }>;
}

export default function DiscordWidget({ serverId, inviteLink }: DiscordWidgetProps) {
  const [data, setData] = useState<DiscordData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDiscordData() {
      try {
        const res = await fetch(
          `https://discord.com/api/guilds/${serverId}/widget.json`
        );
        if (res.ok) {
          const json = await res.json();
          setData(json);
        }
      } catch {
        // Widget might be disabled or server not found
      } finally {
        setLoading(false);
      }
    }

    fetchDiscordData();
  }, [serverId]);

  return (
    <div className="bg-white border border-surface-200 rounded-2xl p-6 max-w-sm mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-[#5865F2] rounded-xl flex items-center justify-center">
          <MessageCircle size={24} className="text-white" />
        </div>
        <div>
          <h3 className="font-display font-semibold text-surface-900">
            {data?.name || 'AeThex Community'}
          </h3>
          <div className="flex items-center gap-2 text-sm">
            {loading ? (
              <span className="text-surface-400">Loading...</span>
            ) : data ? (
              <>
                <span className="flex items-center gap-1 text-green-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  {data.presence_count.toLocaleString()} online
                </span>
              </>
            ) : (
              <span className="text-surface-400">6,700+ members</span>
            )}
          </div>
        </div>
      </div>

      {/* Online members preview */}
      {data && data.members.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-4">
          {data.members.slice(0, 8).map((member) => (
            <div
              key={member.id}
              className="w-8 h-8 rounded-full bg-surface-100 overflow-hidden border-2 border-white"
              title={member.username}
            >
              {member.avatar_url ? (
                <img
                  src={member.avatar_url}
                  alt={member.username}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-surface-300 flex items-center justify-center text-xs text-surface-600">
                  {member.username.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
          ))}
          {data.members.length > 8 && (
            <div className="w-8 h-8 rounded-full bg-surface-100 border-2 border-white flex items-center justify-center text-xs text-surface-500">
              +{data.members.length - 8}
            </div>
          )}
        </div>
      )}

      <a
        href={inviteLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-[#5865F2] hover:bg-[#4752C4] text-white text-center py-2.5 rounded-lg font-medium text-sm transition-colors"
      >
        Join Server
      </a>
    </div>
  );
}
