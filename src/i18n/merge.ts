function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/** Overlay translated fields onto the English source. Missing fields stay in English. */
export function mergeCopy<T>(base: T, overlay: unknown): T {
  if (overlay === undefined) {
    return base;
  }

  if (Array.isArray(base) && Array.isArray(overlay)) {
    return base.map((item, index) => mergeCopy(item, overlay[index])) as T;
  }

  if (isRecord(base) && isRecord(overlay)) {
    const next: Record<string, unknown> = { ...base };
    for (const key of Object.keys(overlay)) {
      next[key] = mergeCopy(next[key], overlay[key]);
    }
    return next as T;
  }

  return overlay as T;
}
