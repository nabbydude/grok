import { Result } from "@/reader/result";

export class Pattern<T = unknown> {
  public exec(str: string, index: number): Result<T> {
    return { success: false };
  }
  public as<U>(mapper: (handles: T) => U): Pattern<U> {
    return new MappedPattern(this, mapper);
  }

  public onlyIf(condition: (handles: T) => boolean): Pattern<T> {
    return new ConditionalPattern(this, condition);
  }
}

// loaded after to workaround circular dependencies
// (MappedPattern fails to load unless Pattern is fully loaded)
import { ConditionalPattern } from "@/reader/pattern/conditional";
import { MappedPattern } from "@/reader/pattern/mapped";
