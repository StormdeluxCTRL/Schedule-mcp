import { createMcpHandler } from "mcp-handler"
import { z } from "zod"
import { supabase } from "@/lib/supabase"

const handler = createMcpHandler((server) => {
  server.registerTool(
    "get_schedule",
    {
      description: "Vrne urnik osebe za določen datum.",
      inputSchema: {
        oseba: z.string(),
        datum: z.string(),
      },
    },
    async ({ oseba, datum }) => {
      const { data, error } = await supabase
        .from("urniki")
        .select("*")
        .eq("oseba", oseba)
        .eq("datum", datum)

      if (error) {
        return {
          content: [
            {
              type: "text",
              text: `Napaka pri branju urnika: ${error.message}`,
            },
          ],
        }
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(data),
          },
        ],
      }
    }
  )
})

export { handler as GET, handler as POST }