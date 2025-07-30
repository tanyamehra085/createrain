"use client";

import InfluencerTable from "@/components/search/InfluencerTable";
import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Chip,
  Stack,
  Alert,
  IconButton,
  Paper,
  Button,
} from "@mui/material";
import { Add, Close, Refresh } from "@mui/icons-material";
import Material3ThemeProvider from "@/contexts/Material3ThemeProvider";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/select/languageswitcher";

type Keyword = {
  id: number;
  text: string;
  active: boolean;
};

interface Influencer {
  id: number;
  name: string;
  username: string;
  email: string;
  bio: string;
  city: string;
  state: string;
  most_viral_video_desc: string;
  hashtags: string[];
  followers: number;
  platforms: string[];
  averageViews: number;
}

// Mock data for demonstration
const mockInfluencers: Influencer[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    username: "sarahjohnson",
    email: "sarah@example.com",
    bio: "Lifestyle blogger and content creator",
    city: "Los Angeles",
    state: "CA",
    most_viral_video_desc: "My morning routine that went viral with 2M views",
    hashtags: ["#lifestyle", "#morning", "#wellness"],
    followers: 45000,
    platforms: ["TikTok", "Instagram"],
    averageViews: 15000,
  },
  {
    id: 2,
    name: "Mike Chen",
    username: "mikechen",
    email: "mike@example.com",
    bio: "Food enthusiast and restaurant reviewer",
    city: "New York",
    state: "NY",
    most_viral_video_desc: "Best street food in NYC",
    hashtags: ["#food", "#nyc", "#foodie"],
    followers: 120000,
    platforms: ["YouTube", "TikTok"],
    averageViews: 35000,
  },
  {
    id: 3,
    name: "Emma Davis",
    username: "emmadavis",
    email: "emma@example.com",
    bio: "Fashion and beauty influencer",
    city: "Miami",
    state: "FL",
    most_viral_video_desc: "Summer fashion haul 2024",
    hashtags: ["#fashion", "#beauty", "#style"],
    followers: 89000,
    platforms: ["Instagram", "TikTok"],
    averageViews: 28000,
  },
  {
    id: 4,
    name: "Alex Rodriguez",
    username: "alexr",
    email: "alex@example.com",
    bio: "Fitness coach and motivational speaker",
    city: "Austin",
    state: "TX",
    most_viral_video_desc: "30-day fitness transformation",
    hashtags: ["#fitness", "#health", "#motivation"],
    followers: 210000,
    platforms: ["YouTube", "Instagram"],
    averageViews: 45000,
  },
  {
    id: 5,
    name: "Lily Wong",
    username: "lilywong",
    email: "lily@example.com",
    bio: "Travel blogger exploring the world",
    city: "San Francisco",
    state: "CA",
    most_viral_video_desc: "Hidden gems in Southeast Asia",
    hashtags: ["#travel", "#adventure", "#explore"],
    followers: 156000,
    platforms: ["TikTok", "YouTube"],
    averageViews: 42000,
  },
];

// Start with empty keywords to match demo behavior
const defaultKeywords: Keyword[] = [];

export default function CampaignPage() {
  const [keywords, setKeywords] = useState<Keyword[]>(defaultKeywords);
  const [isInputVisible, setInputVisible] = useState<boolean>(false);
  const [newKeywordText, setNewKeywordText] = useState<string>("");

  const [influencers, setInfluencers] = useState<Influencer[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [fetchCount, setFetchCount] = useState<number>(100);
  const { t } = useTranslation();

  // Load initial keywords on component mount (simulating fetching from campaign data)
  useEffect(() => {
    // Simulate fetching campaign keywords
    const simulatedKeywords = [
      { id: 1, text: "#lifestyle", active: true },
      { id: 2, text: "#food", active: true },
      { id: 3, text: "#fashion", active: true },
      { id: 4, text: "#fitness", active: true },
      { id: 5, text: "#travel", active: true },
    ];
    setKeywords(simulatedKeywords);

    // Auto-fetch influencers based on initial keywords
    setLoading(true);
    setTimeout(() => {
      setInfluencers(mockInfluencers);
      setLoading(false);
    }, 1000);
  }, []);

  // Simulate filtering based on active keywords
  const filterInfluencersByKeywords = () => {
    setLoading(true);

    setTimeout(() => {
      const activeKeywords = keywords
        .filter((k) => k.active)
        .map((k) => k.text.toLowerCase());

      if (activeKeywords.length === 0) {
        setInfluencers([]);
      } else {
        // Filter mock influencers based on active keywords matching their hashtags
        const filtered = mockInfluencers.filter((influencer) =>
          influencer.hashtags.some((tag) =>
            activeKeywords.some((keyword) =>
              tag.toLowerCase().includes(keyword.replace("#", ""))
            )
          )
        );
        setInfluencers(filtered);
      }
      setLoading(false);
    }, 500);
  };

  const handleDoubleClick = async (id: number) => {
    setKeywords((prev) =>
      prev.map((k) => (k.id === id ? { ...k, active: !k.active } : k))
    );
  };

  const handleAddKeyword = async () => {
    if (!newKeywordText.trim()) return;

    const newKeyword: Keyword = {
      id: Date.now(),
      text: newKeywordText.startsWith("#")
        ? newKeywordText
        : `#${newKeywordText}`,
      active: true,
    };

    const updatedKeywords = [...keywords, newKeyword];
    setKeywords(updatedKeywords);
    setNewKeywordText("");

    // Auto-refresh influencers when keywords change
    setTimeout(() => filterInfluencersByKeywords(), 100);
  };

  const handleRemoveKeyword = async (id: number) => {
    const updatedKeywords = keywords.filter((k) => k.id !== id);
    setKeywords(updatedKeywords);

    // Auto-refresh influencers when keywords change
    setTimeout(() => filterInfluencersByKeywords(), 100);
  };

  const refreshInfluencers = () => {
    filterInfluencersByKeywords();
  };

  const handleRefreshRequest = (newCount: number) => {
    setFetchCount(newCount);
    // In real app, this would fetch more data
    // For demo, we just keep the same mock data
  };

  //   const getColorByIndex = (index:number) => {
  //   const colors = ["#DDEEFF", "#E0F5D1", "#E6ECFF", "#FFE2D9", "#E0F7F7"];
  //   return colors[index % colors.length];
  // };

  return (
    <Material3ThemeProvider>
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Box sx={{ width: "100%" }}>
          {/* Keywords Section */}
          <Box sx={{ mb: 4 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography
                variant="h5"
                component="h1"
                sx={{
                  fontWeight: 600,
                  color: "text.primary",
                  mb: 2,
                  textAlign: "left",
                }}
              >
                {t("campaigns")}
              </Typography>
              <LanguageSwitcher />
            </Box>
            <Paper
              elevation={1}
              sx={{
                p: 2,
                borderRadius: "16px",
                border: 2,
                borderColor: "white",
                background: "#D5E4EB",
                backdropFilter: "blur(50px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow:
                  "inset 0 0 10px rgba(255, 255, 255, 0.4), 0 4px 16px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="h5"
                component="h1"
                sx={{
                  fontWeight: 500,
                  color: "text.primary",
                  mb: 2,
                  textAlign: "left",
                }}
              >
                {t("MatchingKeywords")}
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                sx={{ flexWrap: "wrap", gap: 1, mb: 2 }}
              >
                {keywords.map((keyword) => (
                  <Chip
                    key={keyword.id}
                    label={keyword.text}
                    onClick={() => handleDoubleClick(keyword.id)}
                    onDelete={() => handleRemoveKeyword(keyword.id)}
                    color={keyword.active ? "primary" : "default"}
                    variant={keyword.active ? "filled" : "outlined"}
                    sx={{
                      cursor: "pointer",
                      //                 backgroundColor: getColorByIndex(index),
                      // color: "#000000",
                      // fontWeight:400,
                      //           "&:hover": {
                      //   backgroundColor:getColorByIndex(index), // ← slightly darker or richer
                      // }
                    }}
                  />
                ))}
              </Stack>

              {isInputVisible && (
                <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                  <TextField
                    size="small"
                    fullWidth
                    value={newKeywordText}
                    onChange={(e) => setNewKeywordText(e.target.value)}
                    placeholder="Enter new keyword"
                    onKeyPress={(e) => e.key === "Enter" && handleAddKeyword()}
                  />
                  <Button
                    onClick={handleAddKeyword}
                    variant="contained"
                    size="small"
                    startIcon={<Add />}
                    sx={{
                      // color: "text.primary",
                      fontWeight: 600,
                    }}
                  >
                    Add
                  </Button>
                </Box>
              )}

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <IconButton
                  onClick={() => setInputVisible(!isInputVisible)}
                  color="primary"
                  size="small"
                >
                  <Add />
                </IconButton>

                <Button
                  onClick={refreshInfluencers}
                  variant="outlined"
                  size="small"
                  startIcon={<Refresh />}
                  disabled={loading}
                  sx={{
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
                    color: "#2c2c54",
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                    border: "none",
                    background: "white",
                    fontWeight: 700,
                    "&:hover": {
                      border: "none",
                    },
                  }}
                >
                  {loading ? "Loading..." : "Apply"}
                </Button>
              </Box>
            </Paper>
          </Box>

          {/* Influencer Results Section */}
          <Box>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontWeight: 600,
                color: "text.primary",
                mb: 2,
                textAlign: "left",
              }}
            >
              {t("InfluencerResults")}
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 2, borderRadius: 2 }}>
                {error}
              </Alert>
            )}

            <InfluencerTable
              data={influencers}
              loading={loading}
              error={error}
              initialFetchCount={fetchCount}
              onRefresh={handleRefreshRequest}
            />
          </Box>
        </Box>
      </Container>
    </Material3ThemeProvider>
  );
}
