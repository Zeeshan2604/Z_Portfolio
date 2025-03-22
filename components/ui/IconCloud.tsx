"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  id: "skills-cloud",
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "pointer",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    tooltipClass: "skill-tooltip",
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    textHeight: 20,
    textColour: "#FFFFFF",
    // dragControl: false,
  },
};

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  // Format the icon name to make it more readable
  const formattedTitle = icon.title
    .replace(/\.js/gi, 'JS')
    .replace(/\.net/gi, '.NET')
    .replace(/Node\.js/gi, 'Node.js');

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
      title: formattedTitle,
    },
  });
};

export type DynamicCloudProps = {
  iconSlugs: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetchSimpleIcons({ slugs: iconSlugs }).then((result) => {
      // Map the slugs to proper display names if needed
      const iconMapping: Record<string, string> = {
        'typescript': 'TypeScript',
        'javascript': 'JavaScript',
        'java': 'Java',
        'react': 'React',
        'html5': 'HTML5',
        'css3': 'CSS3',
        'nodedotjs': 'Node.js',
        'express': 'Express',
        'nextdotjs': 'Next.js',
        'linux': 'Linux',
        'postgresql': 'PostgreSQL',
        'vercel': 'Vercel',
        'supabase': 'Supabase',
        'docker': 'Docker',
        'git': 'Git',
        'github': 'GitHub',
        'visualstudiocode': 'VS Code',
        'figma': 'Figma',
        'mongodb': 'MongoDB',
        'python': 'Python'
      };
      
      // Update titles if needed
      if (result && result.simpleIcons) {
        Object.entries(result.simpleIcons).forEach(([slug, icon]) => {
          if (iconMapping[slug]) {
            icon.title = iconMapping[slug];
          }
        });
      }
      
      setData(result);
    });
    
    // Add custom CSS for tooltip styling
    const style = document.createElement('style');
    style.textContent = `
      .skill-tooltip {
        background-color: rgba(128, 90, 213, 0.9) !important;
        color: white !important;
        padding: 5px 10px !important;
        border-radius: 6px !important;
        font-size: 14px !important;
        font-weight: bold !important;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light"),
    );
  }, [data, theme]);

  if (!mounted) {
    return <div className="h-60 w-full" />;
  }

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  );
}
