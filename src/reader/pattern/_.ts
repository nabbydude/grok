import { Result } from "@/reader/result";

export class Pattern<T = unknown> {
  public exec(str: string, index: number): Result<T> {
    return { success: false };
  }
  public as<U>(mapper: (handles: T) => U): Pattern<U> {
    return new MappedPattern(this, mapper);
  }
}

// loaded after to workaround circular dependencies
// (MappedPattern fails to load unless Pattern is fully loaded)
import { MappedPattern } from "@/reader/pattern/mapped";
