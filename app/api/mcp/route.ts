import { createMcpHandler } from "mcp-handler"
import { z } from "zod"
import { supabase } from "@/lib/supabase"

const handler = createMcpHandler((server) => {

  // 1. Tool za urnik
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

  // 2. Tool za potne naloge
  server.registerTool(
    "get_travel_orders",
    {
      description: "Vrne potne naloge za določeno osebo.",
      inputSchema: {
        oseba: z.string(),
      },
    },
    async ({ oseba }) => {
      const { data, error } = await supabase
        .from("potni_nalogi")
        .select("*")
        .eq("oseba", oseba)

      if (error) {
        return {
          content: [
            {
              type: "text",
              text: `Napaka pri branju potnih nalogov: ${error.message}`,
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